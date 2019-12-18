/* eslint-disable no-unused-vars */
import './style.css'
import initUI from './components/index'
import { publicNewsUrl, month } from './components/config'
import RenderNews from './components/render-news'
import ApiNews from './components/api-news'

const pageUI = initUI()

const apiNews = new ApiNews(publicNewsUrl)

const newsRender = new RenderNews(
  apiNews.initNews.bind(apiNews),
  pageUI.apiBack.saveArticle.bind(pageUI.apiBack),
  pageUI.apiBack.deleteArticle.bind(pageUI.apiBack),
  month,
)
