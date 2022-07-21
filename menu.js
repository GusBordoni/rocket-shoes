const menuButton = document.getElementById('menu-hamburger');
const menuLinks = document.getElementById('navbar-links');
const body = document.querySelector('body');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('change');
    menuLinks.classList.toggle('menuDisplay');
});