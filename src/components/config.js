const publicNewsUrl = 'https://newsapi.org/v2/everything?sortBy=popularity&apiKey=ef22b38c31ba4ed38c6d743b6eb163ba&language=ru&pageSize=100'
const url = 'https://api.news-discoverer.ml/'
const signin = 'https://api.news-discoverer.ml/signin'
const signup = 'https://api.news-discoverer.ml/signup'
const getInfoAboutMe = 'https://api.news-discoverer.ml/users/me'
const articles = 'https://api.news-discoverer.ml/articles'
const logout = 'https://api.news-discoverer.ml/logout'
const gitUrl = 'https://api.github.com/repos/MAGLeb/News-Explorer-Frontend/commits'
const maxGitCommits = 15
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

module.exports = {
  publicNewsUrl,
  gitUrl,
  maxGitCommits,
  month,
  url,
  signin,
  signup,
  getInfoAboutMe,
  articles,
  logout,
}
