/* eslint-disable class-methods-use-this */
export default class NewsRender {
  constructor(getNews, saveArticle, deleteArticle, month) {
    this.getNews = getNews

    this._news = []
    this._currentPos = 0
    this.month = month
    this.saveArticle = saveArticle
    this.deleteArticle = deleteArticle

    this.cardTemplate = document.querySelector('#card-template').content
    this._resultsSection = document.querySelector('.results')
    this._resultsField = document.querySelector('.results__container')
    this._searchInput = document.querySelector('.main__input')
    this._submit = document.querySelector('.main__search')
    this._mainButton = document.querySelector('.results__button')
    this._notFound = document.querySelector('.nothing')
    this._preloader = document.querySelector('.preloader')

    this._submit.addEventListener('submit', (event) => this.search(event))
    this._mainButton.addEventListener('click', () => this._renderCards())
    this._resultsField.addEventListener('click', (event) => this.cardHandler(event))
  }

  _renderCards() {
    const container = document.createDocumentFragment()
    const delta = this._news.length - this._currentPos
    const quantati = delta < 3 ? delta : 3
    if (delta <= 3) this._mainButton.classList.add('results__button-off')
    for (let i = 0; i < quantati; i += 1) {
      container.appendChild(this._createCard(this._news[this._currentPos]))
      this._currentPos += 1
    }
    this._resultsField.appendChild(container)
  }

  _clearResultsList() {
    this._currentPos = 0
    this._news.splice(0, this._news.length)
    while (this._resultsField.firstChild) {
      this._resultsField.removeChild(this._resultsField.firstChild)
    }
  }

  _createCard(data) {
    const container = this.cardTemplate.cloneNode(true)

    container.querySelector('.card__image').style.backgroundImage = `url(${data.image})`
    container.querySelector('.card__data').textContent = `${data.date.getDate()} ${this.month[data.date.getMonth()]} ${data.date.getFullYear()}`
    container.querySelector('.card__title').textContent = data.title
    container.querySelector('.card__subtitle').textContent = data.text
    container.querySelector('.card__author').textContent = data.source
    container.querySelector('.card__link').href = data.link
    if (this._isLogged()) {
      container.querySelector('.card__mark').classList.add('card__mark_logged')
    } else {
      container.querySelector('.card__popup').classList.add('card__popup_notlog')
    }
    container.querySelector('.card__mark').setAttribute('cardID', this._currentPos)
    return container
  }

  _isLogged() {
    return Boolean(localStorage.getItem('login'))
  }

  showError() {
    this._searchInput.classList.add('main__input-error')
    this._searchInput.setAttribute('placeholder', 'Поле запроса не может быть пустым')
  }

  hideError() {
    this._searchInput.classList.remove('main__input-error')
    this._searchInput.setAttribute('placeholder', 'Введите тему новости')
  }

  search(event) {
    event.preventDefault()
    const key = this._searchInput.value.replace(/^\s+/, '')
    if (key.length === 0) {
      this.showError()
      return
    }
    this._resultsSection.classList.add('results-off')
    this._notFound.classList.add('nothing-off')
    this._preloader.classList.remove('preloader-off')
    this._mainButton.classList.remove('resuts__button-off')
    if (this._news.length !== 0) {
      this._clearResultsList()
    }
    this.getNews(key)
      .then((data) => {
        this._news = data
        this._preloader.classList.add('preloader-off')
        if (data.length === 0) {
          this._notFound.classList.remove('nothing-off')
        } else {
          this._renderCards()
          this._resultsSection.classList.remove('results-off')
        }
      })
      .catch((err) => {
        console.log(err.message)
        this._notFound.classList.add('nothing-off')
        this._preloader.classList.add('preloader-off')
      })
  }

  cardHandler(event) {
    if (event.target.classList.contains('card__mark')) {
      event.preventDefault()
      if (this._isLogged()) {
        if (event.target.classList.contains('card__mark_saved')) {
          this.deleteArticle(event.target.getAttribute('UID'))
            .then(() => {
              event.target.classList.remove('card__mark_saved')
              event.target.removeAttribute('UID')
            })
            .catch((err) => {
              console.log(err.message)
            })
          event.target.classList.remove('card__mark_saved')
        } else {
          this.saveArticle(this._news[event.target.getAttribute('cardID')])
            .then((res) => {
              console.log(res)
              event.target.classList.add('card__mark_saved')
              event.target.setAttribute('UID', res)
            })
            .catch((err) => {
              console.log(err.message)
            })
        }
      }
    }
  }
}
