import './style.css'
import './components/menu'
import './components/index'
import ApiNews from './components/api-news'
import { publicNewsUrl } from './components/config'

const apiNews = new ApiNews(publicNewsUrl)
