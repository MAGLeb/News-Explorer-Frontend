const menuImg = document.querySelector('.header__menu')
const menuBackground = document.querySelector('.header__background')
const header = document.querySelector('.header')
const menu = document.querySelector('.header__nav-auth')
const body = document.querySelector('body')

menuImg.addEventListener('click', () => {
  if (menuImg.classList.contains('header__menu_black') || menuImg.classList.contains('header__menu-black_active')) {
    menuImg.classList.toggle('header__menu_black')
    menuImg.classList.toggle('header__menu-black_active')
  }

  if (menuImg.classList.contains('header__menu-white_active') || menuImg.classList.contains('header__menu_white')) {
    menuImg.classList.toggle('header__menu_white')
    menuImg.classList.toggle('header__menu-white_active')
  }

  body.classList.toggle('overflow-hidden')
  menuBackground.classList.toggle('header__background_active')
  menu.classList.toggle('header__nav-auth_active')
  header.classList.toggle('header_active')
})
