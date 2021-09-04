// filename: toggle.js
// abstract: this file contains event listeners and functions tied to the 
// navigation links in the landing page

function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
  }
  
  document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);