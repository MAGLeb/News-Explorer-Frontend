import './style.css'
import './components/menu'
import ApiNews from './components/api-news'
import { publicNewsUrl } from './components/config'


const apiNews = new ApiNews(publicNewsUrl)
