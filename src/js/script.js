const activeClass = 'ativo';

// MENU MOBILE
const mobileButton = document.querySelector('.navbar-btn');
const navLinks = document.querySelector('.navbar-links');

mobileButton.addEventListener('click', () => {
   navLinks.classList.toggle(activeClass);
});