//Theme switcher in header


import logoDark from '../img/icons.svg#icon-logo-dark';
import logoLight from '../img/icons.svg#icon-logo-light';

const themeSwitch = document.getElementById('themeSwitch');
const logoIcon = document.querySelector('.logo-icon');

themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.querySelector('.logo-icon').classList.add('active-logo');
  } else {
    document.querySelector('.logo-icon').classList.remove('active-logo');
  }
});

// When loading the page, we check the saved topic
window.addEventListener('DOMContentLoaded', function () {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
      themeSwitch.checked = true;
    }
  }

  if (location.href.indexOf('shopping-list') > -1) {
    document.querySelector('.nav-link-home').classList.remove('active-link');
    document.querySelector('.nav-shopping').classList.add('active-link');
    document.querySelector('.home-page').classList.remove('active-link');
    document.querySelector('.shopping-list-page').classList.add('active-link');
    document.querySelector('.logo-icon').classList.add('active-logo');
  } else {
    document.querySelector('.nav-link-home').classList.add('active-link');
    document.querySelector('.nav-shopping').classList.remove('active-link');
    document.querySelector('.home-page').classList.add('active-link');
    document.querySelector('.shopping-list-page').classList.remove('active-link');
  }
});

// When the switch state changes
themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});


export const buttonClose = document.querySelector('.btn-close');
export const buttonMenu = document.querySelector('.burger-menu');
const modalMenu = document.querySelectorAll('.menu-section');


//Functionality for opening the mobile menu
function openMobileMenu() {
  
  buttonMenu.classList.add('hidden');
  buttonClose.classList.remove('hidden');
  
  modalMenu.forEach((element) => {
    element.style.display = 'block';
    element.classList.add('is-open');
  });
}

buttonMenu.addEventListener('click', openMobileMenu);


// Function to close the mobile menu
function closeMobileMenu() {
  buttonMenu.classList.remove('hidden');
  buttonClose.classList.add('hidden');
  modalMenu.forEach((element) => {
    element.style.display = 'none';
    element.classList.remove('is-open');
  })
}

// Bind a click event handler to the close button
buttonClose.addEventListener('click', closeMobileMenu);