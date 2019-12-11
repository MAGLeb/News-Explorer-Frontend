const menu = document.querySelector('.menu')
const headerContent = document.querySelector('.header__content')
const headerBackground = document.querySelector('.header__background')
const headerIcon = document.querySelector('.header__icon')

headerIcon.addEventListener('click', () => {
  headerBackground.classList.toggle('header__background_state_active')
  headerContent.classList.toggle('header__content_state_active')
  menu.classList.toggle('menu_state_active')
  headerIcon.classList.toggle('header__icon-close')
})
