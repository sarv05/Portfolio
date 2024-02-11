const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function () {
    navbar.classList.toggle('show');
    menuIcon.innerHTML = navbar.classList.contains('show') ? '&times;' : '&#9776;';
});