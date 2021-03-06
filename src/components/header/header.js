/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */

export default class Header {
  constructor(apiBack, popupEnter) {
    this.popupEnter = popupEnter
    this.apiBack = apiBack

    this.icon = document.querySelector('.header__icon')
    this.saveArticleLink = document.querySelector('#link-to-save-articles')
    this.button = document.querySelector('.menu__button')
    this.buttonName = document.querySelector('.menu__name')

    this.menu = document.querySelector('.menu')
    this.content = document.querySelector('.header__content')
    this.background = document.querySelector('.header__background')

    this.toggleMenu = this.toggleMenu.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)

    this.icon.addEventListener('click', this.toggleMenu)
  }

  renderHeader() {
    if (localStorage.getItem('login')) {
      this.button.addEventListener('click', this.logout)
      this.button.removeEventListener('click', this.login)
      this.saveArticleLink.style.display = 'block'
      this.buttonName.textContent = `${localStorage.getItem('username')}`
    } else {
      this.button.addEventListener('click', this.login)
      this.button.removeEventListener('click', this.logout)
      this.saveArticleLink.style.display = 'none'
      this.buttonName.textContent = 'Авторизироваться'
    }
  }

  logout() {
    this.apiBack.logout()
      .then(() => {
        localStorage.removeItem('login')
        localStorage.removeItem('username')
        this.renderHeader()
      })
  }

  login() {
    this.popupEnter.open()
  }


  toggleMenu() {
    this.background.classList.toggle('header__background_state_active')
    this.content.classList.toggle('header__content_state_active')
    this.menu.classList.toggle('menu_state_active')

    this.icon.classList.toggle('header__icon-close')
  }
}
