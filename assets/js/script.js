document.addEventListener("DOMContentLoaded", () => {
    const MI_WHATSAPP = "51945518609";
    const MI_PORTAFOLIO = "https://www.behance.net/gallery/246257859/PORTFOLIO-A-HORA";

    const fotos = {
        DEPORTIVA: [
            "./assets/images/Deportiva1.JPG",
            "./assets/images/Deportiva2.jpg",
            "./assets/images/Deportiva3.jpg"
        ],
        CORPORATIVA: [
            "./assets/images/Coorporativa.jpg",
            "./assets/images/Coorporativa1.jpg",
            "./assets/images/Coorporativa2.jpg"
        ],
        EVENTOS: [
            "./assets/images/Social1.jpg",
            "./assets/images/Social2.jpg",
            "./assets/images/Social3.jpg"
        ],
        PRODUCTO: [
            "./assets/images/Producto1.jpg",
            "./assets/images/Producto2.jpg"
        ],
        STREAMING: [
            "./assets/images/streaming1.png",
            "./assets/images/streaming2.png",
            "./assets/images/streaming3.png",
            "./assets/images/streaming4.png",
            "./assets/images/streaming5.png",
            "./assets/images/streaming6.png"
        ],
        CORPORATIVO_V: "https://player.vimeo.com/video/1176090558?autoplay=1&muted=1&loop=1",
        SOCIAL_MEDIA_V: "https://player.vimeo.com/video/1176091837?autoplay=1&muted=1&loop=1",
        DRON_V: "https://player.vimeo.com/video/1176094038?autoplay=1&muted=1&loop=1"
    };

    const modal = document.getElementById("modal-galeria");
    const container = document.getElementById("modal-imagenes");
    const tituloGaleria = document.getElementById("modal-titulo");
    const pautasContenedor = document.getElementById("pautas-contenedor");

    window.abrirGaleria = (cat) => {
        container.innerHTML = "";
        container.classList.remove("panoramic");

        if (cat.endsWith("_V")) {
            tituloGaleria.innerText = "PROYECTO VIDEO";

            const iframe = document.createElement("iframe");
            iframe.src = fotos[cat];
            iframe.style.height = "450px";
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; fullscreen; picture-in-picture";
            iframe.allowFullscreen = true;

            container.appendChild(iframe);
        } else {
            tituloGaleria.innerText = cat === "STREAMING" ? "TRANSMISIONES EN VIVO" : cat;

            if (cat === "STREAMING") {
                container.classList.add("panoramic");
            }

            fotos[cat].forEach((url) => {
                const img = document.createElement("img");
                img.src = url;
                img.alt = `Imagen de ${cat}`;
                loading = "lazy";
                container.appendChild(img);
            });
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    window.cerrarGaleria = () => {
        container.innerHTML = "";
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    pautasContenedor.innerHTML = `
        <h3 style="margin:0 0 10px 0; font-family:'Bungee';">HABLEMOS DE TU PROYECTO</h3>
        <p style="margin:0 0 20px 0; line-height:1.7;">
            Si necesitas fotografía, video, reels o streaming en vivo, escríbenos y armamos una propuesta a tu medida.
        </p>
        <a href="https://wa.me/${MI_WHATSAPP}" target="_blank" class="btn-contact">COTIZAR POR WHATSAPP</a>
        <a href="${MI_PORTAFOLIO}" target="_blank" class="btn-contact alt-btn">VER PORTAFOLIO COMPLETO</a>
    `;

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            cerrarGaleria();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            cerrarGaleria();
        }
    });
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbx864ctxaAA28nFKIE4bkznxRPFZ0BgwDrqCtvDdYylYusSOgtowvH5xQ_wUC2oSd7oDQ/exec';
const form = document.getElementById('pro-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();
  status.style.display = "block";
  status.innerText = "Enviando...";
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        status.innerText = "¡Mensaje enviado con éxito! Nos contactaremos pronto.";
        form.reset();
    })
    .catch(error => {
        status.innerText = "Error al enviar. Intenta por WhatsApp.";
        console.error('Error!', error.message);
    });
});
