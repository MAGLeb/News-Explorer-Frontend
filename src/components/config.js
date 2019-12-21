const publicNewsUrl = 'https://newsapi.org/v2/everything?sortBy=popularity&apiKey=ef22b38c31ba4ed38c6d743b6eb163ba&language=ru&pageSize=100'
const url = 'https://api.news-discoverer.ml/'
const signin = 'https://api.news-discoverer.ml/signin'
const signup = 'https://api.news-discoverer.ml/signup'
const getInfoAboutMe = 'https://api.news-discoverer.ml/users/me'
const articles = 'https://api.news-discoverer.ml/articles'
const logout = 'https://api.news-discoverer.ml/logout'
const gitUrl = 'https://api.github.com/repos/MAGLeb/News-Explorer-Frontend/commits'
const maxGitCommits = 15
const timeInMilSecWeek = 7 * 24 * 3600 * 1000
const countOfCardsOnPage = 3
const countOfKeys = 3
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
const normalAbout = {
  title: 'About Glebas',
  first: 'Glebas is a young ambitious guy. Glebas loves to study, think, and discuss. Glebas is engaged in chess and yoga in his free time. Glebas studies at the university, although he understands little.',
  second: "Glebas is also mastering the university bachelor's program himself. Glebas is interested in mathematics. Especially when Glebas understands it. Glebas realized that everything was built on algorithms. Glebas evolve algorithmic thinking. Here is such Glebas."
}
const about = {
  title: 'Об Авторе',
  first: 'Привет, меня зовут Глеб. Я прошёл курсы веб-разработчика в Яндекс.Практикум, где изучил HTML, CSS, JavaScript, Node.js и основы работы с MongoDB.',
  second: 'За время обучения я выполнил несколько проектов по адаптивной верстке, работе с пользователями, асинхронным запросам к серверу, построению RESTful API, написанию серверного кода и многому другому.'
}

module.exports = {
  publicNewsUrl,
  countOfCardsOnPage,
  timeInMilSecWeek,
  countOfKeys,
  normalAbout,
  about,
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
