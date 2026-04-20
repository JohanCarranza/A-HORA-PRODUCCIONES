document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById('pautas-contenedor');
    
    // Tu enlace de Google Sheets publicado como CSV
    const urlSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbSraD6NtyayhWHMVRxoTa8d5X2GH-HvXWQqRlPqswnhpvhOcWuIhVl5QYefSeHI71Gvp29cLDYuOY/pub?output=csv";

    function cargarDatosDesdeSheet() {
        console.log("Sincronizando con Google Sheets...");

        fetch(urlSheet)
            .then(res => res.text())
            .then(csvText => {
                // Separamos el texto por filas
                const filas = csvText.split('\n');
                
                // Si la hoja tiene datos en la segunda fila (índice 1)
                if (filas.length > 1) {
                    // Separamos por comas la segunda fila
                    const columnas = filas[1].split(',');

                    // Creamos el objeto pauta (limpiando espacios o comillas extras)
                    const pauta = {
                        estado: columnas[0]?.trim() || "S/N",
                        temaDia: columnas[1]?.trim() || "Sin tema",
                        invitado: columnas[2]?.trim() || "Por confirmar",
                        horario: columnas[3]?.trim() || "--:--",
                    };

                    // Pintamos el diseño verde vibrante
                    contenedor.innerHTML = `
                        <div class="status-badge">${pauta.estado}</div>
                        <h2>${pauta.temaDia}</h2>
                        <hr style="border-top: 1px solid #2dfc52; opacity: 0.3; margin: 20px 0;">
                        <p><strong>Invitado de Hoy</strong>
                           <span class="data-text" style="color: #2dfc52; display: block; font-size: 1.3rem; font-weight: bold; margin-top: 5px;">
                                ${pauta.invitado}
                           </span>
                        </p>
                        <div class="time" style="color: #2dfc52; font-weight: bold; margin-top: 20px;">
                            INICIAMOS: ${pauta.horario}
                        </div>
                    `;
                }
            })
            .catch(err => {
                console.error("Error al conectar:", err);
                contenedor.innerHTML = `<p style="color: #2dfc52;">Buscando señal de satélite...</p>`;
            });
    }

    // Carga inicial
    cargarDatosDesdeSheet();

    // Se actualiza automáticamente cada 30 segundos
    setInterval(cargarDatosDesdeSheet, 30000); 
});