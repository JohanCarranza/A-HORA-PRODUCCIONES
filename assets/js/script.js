document.addEventListener("DOMContentLoaded", () => {
    const MI_WHATSAPP = "51945518609";
    const MI_PORTAFOLIO = "https://www.behance.net/gallery/246257859/PORTFOLIO-A-HORA";

    const fotos = {
        'DEPORTIVA': ['./assets/images/Deportiva1.JPG', './assets/images/Deportiva2.jpg', './assets/images/Deportiva3.jpg'],
        'CORPORATIVA': ['./assets/images/Coorporativa.jpg', './assets/images/Coorporativa1.jpg', './assets/images/Coorporativa2.jpg'],
        'EVENTOS': ['./assets/images/Social1.jpg', './assets/images/Social2.jpg', './assets/images/Social3.jpg'],
        'PRODUCTO': ['./assets/images/Producto1.jpg', './assets/images/Producto2.jpg'],
        'STREAMING': [
            './assets/images/streaming1.png', 
            './assets/images/streaming2.png', 
            './assets/images/streaming3.png', 
            './assets/images/streaming4.png',
            './assets/images/streaming5.png',
            './assets/images/streaming6.png'
        ]
    };

    const modal = document.getElementById("modal-galeria");
    const container = document.getElementById("modal-imagenes");
    const tituloGaleria = document.getElementById("modal-titulo");

    window.abrirGaleria = (cat) => {
        tituloGaleria.innerText = cat === 'STREAMING' ? 'TRANSMISIONES EN VIVO' : cat;
        container.innerHTML = '';
        
        // Si es Streaming, añadimos la clase 'panoramic' para que se vean grandes
        if (cat === 'STREAMING') {
            container.classList.add('panoramic');
        } else {
            container.classList.remove('panoramic');
        }

        if (fotos[cat]) {
            fotos[cat].forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                container.appendChild(img);
            });
            modal.style.display = "block";
        }
    }

    window.cerrarGaleria = () => { modal.style.display = "none"; }

    document.getElementById('pautas-contenedor').innerHTML = `
        <h3 style="margin:0; font-family:'Bungee';">CONTACTO DIRECTO:</h3>
        <a href="https://wa.me/${MI_WHATSAPP}" target="_blank" class="btn-contact">WHATSAPP</a>
        <a href="${MI_PORTAFOLIO}" target="_blank" class="btn-contact" style="background:#fff; color:#1a1a1a">BEHANCE</a>
    `;

    window.onclick = (e) => { if (e.target == modal) cerrarGaleria(); };
});