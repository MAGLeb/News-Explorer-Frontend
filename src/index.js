import './style.css'
import './components/index'
import ApiNews from './components/api-news'
import { publicNewsUrl } from './components/config'

const apiNews = new ApiNews(publicNewsUrl)
