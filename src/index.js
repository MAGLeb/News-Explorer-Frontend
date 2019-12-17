import './style.css'
import './components/index'
import { publicNewsUrl } from './components/config'
import ApiNews from './components/api-news'

const apiNews = new ApiNews(publicNewsUrl)
apiNews.getInitNews()
