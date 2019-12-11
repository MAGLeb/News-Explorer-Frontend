const menu = document.querySelector('.menu')
const content = document.querySelector('.header__content')
const background = document.querySelector('.header__background')
const icon = document.querySelector('.header__icon')

icon.addEventListener('click', () => {
  background.classList.toggle('header__background_state_active')
  content.classList.toggle('header__content_state_active')
  menu.classList.toggle('menu_state_active')
  icon.classList.toggle('header__icon-close')
})
