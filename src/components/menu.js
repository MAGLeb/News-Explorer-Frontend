const menuImg = document.querySelector('.header__menu')
const menuBackground = document.querySelector('.header__background')
const header = document.querySelector('.header')
const menu = document.querySelector('.header__nav-auth')

menuImg.addEventListener('click', () => {
  if (menuImg.classList.contains('header__menu-black') || menuImg.classList.contains('header__menu-black-active')) {
    menuImg.classList.toggle('header__menu-black')
    menuImg.classList.toggle('header__menu-black-active')
  }

  if (menuImg.classList.contains('header__menu-white-active') || menuImg.classList.contains('header__menu-white')) {
    menuImg.classList.toggle('header__menu-white')
    menuImg.classList.toggle('header__menu-white-active')
  }

  menuBackground.classList.toggle('header__background-active')
  menu.classList.toggle('header__nav-auth-active')
  header.classList.toggle('header-active')
})
