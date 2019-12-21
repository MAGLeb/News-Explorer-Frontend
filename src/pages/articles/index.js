/* eslint-disable no-unused-vars */
import './style.css'
import initUI from '../../components/index'
import RenderSaveNews from '../../components/cards/render-saved-cards'
import { month, countOfKeys, countOfCardsOnPage } from '../../components/config'

const pageUI = initUI()

const collection = new RenderSaveNews(
  pageUI.apiBack.getAllArticles.bind(pageUI.apiBack),
  pageUI.apiBack.deleteArticle.bind(pageUI.apiBack),
  month,
  countOfKeys,
  countOfCardsOnPage
)
collection.render()

if (!localStorage.getItem('login')) {
  window.location.href = '/'
}
