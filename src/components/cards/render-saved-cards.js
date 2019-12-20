/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class RenderSaveNews {
  constructor(getAllArticles, deleteArticle, month, countOfKeys, countOfCardsOnPage) {
    this.month = month
    this.getAllArticles = getAllArticles
    this.deleteArticle = deleteArticle

    this.countOfCardsOnPage = countOfCardsOnPage
    this.countOfKeys = countOfKeys

    this._cardTemplate = document.querySelector('#card-template-save').content
    this._collectionContainer = document.querySelector('.results__container')

    this._topicFirst = document.querySelector('.topic__first')
    this._topicSecond = document.querySelector('.topic__second')
    this._topicLast = document.querySelector('.topic__last')
    this._topicMore = document.querySelector('.topic__more')

    this._articlesQty = document.querySelector('#amount-cards')
    this._articlesHeader = document.querySelector('.topic__title')
    this._stats = {}

    this._collectionContainer.addEventListener('click', (event) => this._handleArticle(event))
  }

  render() {
    if (!this._isLogged) return
    this.getAllArticles()
      .then((res) => {
        this._articlesHeader.insertAdjacentText('afterbegin', localStorage.getItem('username'))
        Array.from(res.data.artlicles).forEach((item) => {
          this._stats[item._id] = item.keyword
          item.date = new Date(Date.parse(item.date))
          this._collectionContainer.appendChild(this._createCard(item))
        })
        this._updateStatistics()
      })
      .catch((err) => console.log(err.message))
  }

  _createCard(data) {
    const container = this._cardTemplate.cloneNode(true)
    container.querySelector('.card__image').style.backgroundImage = `url(${data.image})`
    container.querySelector('.card__data').textContent = `${data.date.getDate()} ${this.month[data.date.getMonth()]} ${data.date.getFullYear()}`
    console.log(container.querySelector('.card__data').textContent)
    container.querySelector('.card__title').textContent = data.title
    container.querySelector('.card__subtitle').textContent = data.text
    container.querySelector('.card__author').textContent = data.source
    container.querySelector('.card__link').href = data.link
    container.querySelector('.card__key').textContent = data.keyword
    container.querySelector('.card__mark-del').setAttribute('UID', data._id)
    container.querySelector('.card__mark-del-trash').setAttribute('UID', data._id)
    return container
  }

  _isLogged() {
    return Boolean(localStorage.getItem('login'))
  }

  _keywordCount() {
    const theKeys = {}
    const popular = { words: [], key: '', max: 0 }
    Array.from(Object.keys(this._stats)).forEach((item) => {
      if (!(this._stats[item] in theKeys)) {
        theKeys[this._stats[item]] = 1
      } else {
        theKeys[this._stats[item]] += 1
      }
    })
    const total = Array.from(Object.keys(theKeys)).length
    const turns = total >= this.countOfCardsOnPage ? this.countOfCardsOnPage : total
    for (let i = 0; i < turns; i += 1) {
      Array.from(Object.keys(theKeys)).forEach((item) => {
        if (popular.max < theKeys[item]) {
          popular.max = theKeys[item]
          popular.key = item
        }
      })
      delete theKeys[popular.key]
      popular.words.push(popular.key)
      popular.max = 0
      popular.key = ''
    }

    return {
      popular: popular.words,
      total,
    }
  }

  _updateStatistics() {
    this._articlesQty.textContent = `${Array.from(Object.keys(this._stats)).length}`
    const keywords = this._keywordCount()

    this._topicFirst.textContent = keywords.total >= 1 ? keywords.popular.shift() : ''
    let tagLine = ''
    if (keywords.total === this.countOfKeys) {
      tagLine = `, ${keywords.popular.shift()}, ${keywords.popular.shift()}`
    } else {
      tagLine = keywords.total <= 1 ? '' : `, ${keywords.popular.shift()}`
    }
    this._topicSecond.textContent = tagLine
    this._topicLast.style.display = keywords.total > this.countOfKeys ? 'auto' : 'none'
    this._topicMore.textContent = keywords.total - 2
  }

  _handleArticle(event) {
    if (event.target.classList.contains('card__mark-del') || event.target.classList.contains('card__mark-del-trash')) {
      event.preventDefault()
      this.deleteArticle(event.target.getAttribute('UID'))
        .then(() => {
          delete this._stats[event.target.getAttribute('UID')]
          this._collectionContainer.removeChild(event.target.closest('.card'))
          this._updateStatistics()
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }
}
