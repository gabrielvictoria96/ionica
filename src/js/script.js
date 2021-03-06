//

const activeClass = 'ativo';
const selectedClass = 'selected';

//Tabnav index.html
const tabSelectors = document.querySelectorAll('.js-textbox-selectors li');
const textBoxes = document.querySelectorAll('.js-textbox p');

function decorateTabSelector(index) {
   tabSelectors.forEach((interactiveBtn) => {
      interactiveBtn.classList.remove(selectedClass);
   })
   tabSelectors[index].classList.add(selectedClass);
}

function activateTextBox(index) {
   textBoxes.forEach((paragraph) => {
      paragraph.classList.remove(activeClass)
   })
   textBoxes[index].classList.add(activeClass);
}

tabSelectors.forEach((interactiveBtn, index) => {
   interactiveBtn.addEventListener('click', () => {
      decorateTabSelector(index)
      activateTextBox(index)
   })

})


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

//Tabnav funcionamento.html

function initiTabNav() {
   const tabMenu = document.querySelectorAll('.js-tabmenu li');
   const tabMenuImg = document.querySelectorAll('.js-tabmenu li img');
   const tabContent = document.querySelectorAll('.js-tabcontent section');
   if (tabMenu.length && tabContent.length) {
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


//GALERIA

let imagem = document.querySelectorAll('.small-img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btnClose = document.querySelector('#btn-close');
let src = "";

imagem.forEach((img => {
   img.addEventListener('click', function () {
      src = img.getAttribute('src');
      modalImg.setAttribute('src', src);
      modal.classList.toggle('modal_active');
   });
}));


btnClose.addEventListener('click', () => {
   modal.classList.toggle('modal_active');
});