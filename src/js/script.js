const activeClass = 'ativo';

// MENU MOBILE
const mobileButton = document.querySelector('.navbar-btn');
const navLinks = document.querySelector('.navbar-links');
const links = document.querySelectorAll('.navbar-links li a');

mobileButton.addEventListener('click', () => {
   navLinks.classList.toggle(activeClass);
});



links.forEach((link) => {
   link.addEventListener('click', () => {
      navLinks.classList.remove(activeClass);
   });
});
  
   



