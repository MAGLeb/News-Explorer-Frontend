export default class PopupSuccess {
  constructor(popup) {
    this.popup = popup

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.openLink = this.openLink.bind(this)

    this.popup.querySelector('.popup__close').addEventListener('click', this.close)
    this.popup.querySelector('.popup__enter').addEventListener('click', this.openLink)
  }

  open() {
    this.popup.classList.add('popup_is-opened')
  }

  close() {
    this.popup.classList.remove('popup_is-opened')
  }

  openLink() {
    this.close()
    document.querySelector('.popup').classList.add('popup_is-opened')
  }
}
