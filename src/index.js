/* eslint-disable no-unused-vars */
import './style.css'
import initUI from './components/index'
import {
  publicNewsUrl, month, normalAbout, timeInMilSecWeek, countOfCardsOnPage
} from './components/config'
import About from './components/about/about'
import RenderNews from './components/cards/render-cards'
import ApiNews from './components/api/api-news'

const pageUI = initUI()

const renderAbout = new About(normalAbout)
const apiNews = new ApiNews(publicNewsUrl, timeInMilSecWeek)

const newsRender = new RenderNews(
  apiNews.initNews.bind(apiNews),
  pageUI.apiBack.saveArticle.bind(pageUI.apiBack),
  pageUI.apiBack.deleteArticle.bind(pageUI.apiBack),
  month,
  countOfCardsOnPage,
)
