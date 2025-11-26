
const imagensDoSite = [
    "fachada.jpg.jpg",
    "fachada02.jpg",
    "fachada03.jpg",
    "fachada04.jpg"
];

let index = 0;
const img = document.getElementById("galeria-img");
const intervalo = 3500; // tempo de troca (ms)

// mostrar a imagem atual
function mostrarImagem() {
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = imagens[index];
        img.style.opacity = 1;
    }, 300);
}

// avançar
function proximo() {
    index = (index + 1) % imagens.length;
    mostrarImagem();
}

// clique avança
img.addEventListener("click", proximo);

// autoplay
setInterval(proximo, intervalo);

// primeira imagem
mostrarImagem();
