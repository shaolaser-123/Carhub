const sliders = document.querySelectorAll('.slider'); // Get each slider container

sliders.forEach((slider) => {
  const slides = slider.querySelectorAll('.slides img'); // Only images inside THIS slider
  let slideIndex = 0;
  
  // Hide all slides except the first one initially
  slides.forEach((slide, i) => {
    slide.classList.toggle('displaySlides', i === 0);
  });
  
  function nextSlide() {
    slides[slideIndex].classList.remove('displaySlides');
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to 0 when we hit the end
    slides[slideIndex].classList.add('displaySlides');
  }
  
  setInterval(nextSlide, 3000); // Start interval for THIS slider only
});