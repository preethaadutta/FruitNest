function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}


let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

