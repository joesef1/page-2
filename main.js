let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}













  // JavaScript code
  const menuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');

  // Event listener for the menu button click
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    userMenu.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the menu
  });

  // Event listener for clicks outside the menu to close it
  window.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !userMenu.contains(event.target)) {
      menuButton.setAttribute('aria-expanded', 'false');
      userMenu.classList.add('hidden');
    }
  });
