/* eslint-disable no-trailing-spaces */
/* eslint-disable no-restricted-globals */
export default class Popup {
  constructor(popup, apiBack) {
    this.popup = popup
    this.api = apiBack
    this.button = popup.querySelector('.popup__button')
    this.error = this.popup.querySelector('.popup__error-user')
    this.form = popup.form

    this.close = this.close.bind(this)
    this.submit = this.submit.bind(this)

    this.popup.querySelector('.popup__close').addEventListener('click', this.close)
    this.popup.querySelector('.popup__button').addEventListener('click', this.submit)
  }

  open() {
    this.popup.classList.add('popup_is-opened')
  }

  close() {
    this.popup.classList.remove('popup_is-opened')
  }

  submit() {
    event.preventDefault()

    this.api.signin(this.form.elements.email.value, this.form.elements.password.value)
      .then((res) => {
        localStorage.setItem('login', res.login)
        this.error.classList.remove('popup__error_active')
        this.close()
        this.form.elements.email.value = ''
        this.form.elements.password.value = ''
      })
      .catch((err) => {
        console.log(err)
        this.error.textContent = 'Wrong password or login'
        this.error.classList.add('popup__error_active')
      })
      .finally(() => {
        this.button.setAttribute('disabled', 'true')
        this.button.classList.remove('popup__button-active')
      })
  }
}
