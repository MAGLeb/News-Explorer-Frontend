export default class PopupSuccess {
  constructor(popup) {
    this.popup = popup

    this.popupEnter = document.querySelector('.popup')

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.openLink = this.openLink.bind(this)
    this.checkToClose = this.checkToClose.bind(this)

    this.popup.querySelector('.popup__close').addEventListener('click', this.close)
    this.popup.querySelector('.popup__enter').addEventListener('click', this.openLink)

    window.addEventListener('keydown', this.checkToClose)
    window.addEventListener('click', this.checkToClose)
  }

  open() {
    this.popup.classList.add('popup_is-opened')
  }

  checkToClose(e) {
    if (e.key === 'Escape') {
      this.close()
    }
    if (e.target.classList.contains('popup') && e.target.classList.contains('popup_is-opened')) {
      this.close()
    }
  }

  close() {
    this.popup.classList.remove('popup_is-opened')
  }

  openLink() {
    this.close()
    this.popupEnter.classList.add('popup_is-opened')
  }
}
