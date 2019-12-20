/* eslint-disable no-trailing-spaces */
/* eslint-disable no-restricted-globals */
export default class Popup {
  constructor(popup, apiBack, validation) {
    this.popup = popup
    this.api = apiBack
    this.validation = validation
    this.button = this.popup.querySelector('.popup__button')
    this.error = this.popup.querySelector('.popup__error-top-of-button')
    this.form = this.popup.querySelector('form')
    this.popupReg = document.querySelector('.popup-reg')

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.submit = this.submit.bind(this)
    this.openLink = this.openLink.bind(this)
    this.checkToClose = this.checkToClose.bind(this)

    this.popup.querySelector('.popup__close').addEventListener('click', this.close)
    this.popup.querySelector('.popup__button').addEventListener('click', this.submit)
    this.popup.querySelector('.popup__under-link').addEventListener('click', this.openLink)
    window.addEventListener('keydown', this.checkToClose)
    window.addEventListener('click', this.checkToClose)

    this.validation(this.form)
  }

  checkToClose(e) {
    if (e.key === 'Escape') {
      this.close()
    }
    if (e.target.classList.contains('popup') && e.target.classList.contains('popup_is-opened')) {
      this.close()
    }
  }

  open() {
    this.popup.classList.add('popup_is-opened')
  }

  close() {
    this.popup.classList.remove('popup_is-opened')
  }

  openLink() {
    this.close()
    this.popupReg.classList.add('popup_is-opened')
  }

  submit() {
    event.preventDefault()

    this.api.signin(this.form.elements.email.value, this.form.elements.password.value)
      .then((res) => {
        localStorage.setItem('login', res.login)
        this.error.classList.remove('popup__error_is-active')
        this.close()
        this.form.elements.email.value = ''
        this.form.elements.password.value = ''
        this.button.setAttribute('disabled', 'true')
        this.button.classList.remove('popup__button_is-active')
        this.api.getInfoAboutMe()
          .then((username) => {
            localStorage.setItem('username', username)
          })
          .then(() => {
            window.location.reload()
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
        this.error.classList.add('popup__error_is-active')
      })
  }
}
