document.addEventListener("DOMContentLoaded", () => {
  const slides = ["hero.png", "hero2.png", "hero3.png", "hero4.png"];
  let index = 0;
  const img = document.querySelector(".hero-center img");
  const prev = document.querySelector(".slide-controls button:first-of-type");
  const next = document.querySelector(".slide-controls button:last-of-type");
  const counter = document.querySelector(".slide-controls span");

  function updateSlide() {
    img.src = slides[index];
    counter.textContent = `${String(index+1).padStart(2,"0")}/04`;
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });
});
