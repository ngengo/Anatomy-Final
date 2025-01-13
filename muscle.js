let index = 0;

function showNextSlide() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');
  
  if (index >= slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Auto Slide every 3 seconds
setInterval(showNextSlide, 3000);
