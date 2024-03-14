'use strict'
const icon = document.querySelector('.side-info__icon-menu');

icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');

});