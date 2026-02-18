const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const cards = Array.from(track.children);

let currentIndex = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove("active", "side");
    if (index === currentIndex) {
      card.classList.add("active");
    } else {
      card.classList.add("side");
    }
  });

  const cardWidth = cards[0].offsetWidth + 30; // largura + gap
  const offset = -(currentIndex * cardWidth) + (track.parentElement.offsetWidth / 2 - cardWidth / 2);
  track.style.transform = `translateX(${offset}px)`;
}

// Avançar
next.onclick = () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
};

// Voltar
prev.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
};

// Inicializa o carrossel
updateCarousel();

// Ajusta o carrossel ao redimensionar a tela
window.addEventListener("resize", updateCarousel);
