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
  
   

function initiTabNav() {
   const tabMenu = document.querySelectorAll('.js-tabmenu li');
   const tabMenuImg = document.querySelectorAll('.js-tabmenu li img');
   const tabContent = document.querySelectorAll('.js-tabcontent section');
   if(tabMenu.length && tabContent.length) {
      tabContent[0].classList.add(activeClass);   
      
   
   function activeTab(index) {
      tabContent.forEach((section) => {
         section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
   }

   tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
         activeTab(index);
         });
      });
   };
};
initiTabNav();


