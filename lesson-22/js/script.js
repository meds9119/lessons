'use strict'
const icon = document.querySelector('.menu__icon-menu');

icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');

});
// const tabletBreakpoint = parseInt(getComputedStyle(document.body).getPropertyValue('--tablet-breakpoint'));
// console.log(tabletBreakpoint); // Перевірка значення
// // Отримуємо потрібні елементи
// const topheadContacts = document.querySelector('.tophead__contacts');
// const navList = document.querySelector('.nav__list');
//
// // Переміщуємо елементи до відповідних місць залежно від розміру екрану
// if (window.innerWidth <= $tablet-breakpoint) {
//     navList.appendChild(topheadContacts); // Додати контакти у бургер-меню
// } else {
//     // Додати контакти до основного меню
// }