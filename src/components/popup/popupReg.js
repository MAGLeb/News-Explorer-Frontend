/* eslint-disable max-len */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-restricted-globals */
import Popup from './popup'

export default class PopupReg extends Popup {
  constructor(popup, apiBack, validation, popupSuccess) {
    super(popup, apiBack, validation)

    this.popupSuccess = popupSuccess
  }

  openLink() {
    this.close()
    document.querySelector('.popup').classList.add('popup_is-opened')
  }

  submit() {
    event.preventDefault()

    this.api.signup(this.form.elements.email.value, this.form.elements.password.value, this.form.elements.name.value)
      .then(() => {
        this.error.classList.remove('popup__error_is-active')
        this.close()
        this.form.elements.email.value = ''
        this.form.elements.password.value = ''
        this.form.elements.name.value = ''
        this.popupSuccess.open()
      })
      .catch((err) => {
        console.log(err)
        this.error.classList.add('popup__error_is-active')
      })
  }
}
