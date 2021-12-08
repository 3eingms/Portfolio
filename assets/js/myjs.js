const menuButton = document.querySelector('.menu-button');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const isSideMenuOpen = false;

menuButton.addEventListener('click', function () {

    if (isSideMenuOpen == false) {
        sideMenu.classList.add('display-side-menu');
        overlay.classList.add('display-overlay');
        menuButton.firstElementChild.classList.replace('fa-bars', 'fa-times');
    } else {
        sideMenu.classList.remove('display-side-menu');
        overlay.classList.remove('display-overlay');
        menuButton.firstElementChild.classList.replace('fa-times', 'fa-bars');
    }

});


overlay.addEventListener('click', function () {
    sideMenu.classList.remove('display-side-menu');
    overlay.classList.remove('display-overlay');
    menuButton.firstElementChild.classList.replace('fa-times', 'fa-bars');
});