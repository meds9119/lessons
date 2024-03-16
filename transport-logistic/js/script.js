'use strict'
// Open burger-menu
const icon = document.querySelector('.side-info__icon-menu');

icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');

});

// Open submenu in burger-menu
const submenuItem = document.querySelector('.nav__item--arrow');
const submenu = document.querySelector('.submenu');

submenuItem.addEventListener('click', function() {
    submenuItem.classList.toggle('submenu-open');
});
