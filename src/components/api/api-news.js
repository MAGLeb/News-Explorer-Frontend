/* eslint-disable no-plusplus */
export default class ApiNews {
  constructor(publicNewsUrl, timeInMilSecWeek) {
    this.publicNewsUrl = publicNewsUrl
    this.timeInMilSecWeek = timeInMilSecWeek
  }

  initNews(keys) {
    const dateNow = new Date()
    const dateMinusWeek = new Date(dateNow - this.timeInMilSecWeek)
    const dateTo = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`
    const dateFrom = `${dateMinusWeek.getFullYear()}-${dateMinusWeek.getMonth() + 1}-${dateMinusWeek.getDate()}`
    const url = `${this.publicNewsUrl}&q=${keys}&from=${dateFrom}&to=${dateTo}`
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Something went wrong')
      })
      .then((data) => {
        const news = []
        data.articles.forEach((item) => {
          news.push({
            source: item.source.name,
            title: item.title,
            date: new Date(Date.parse(item.publishedAt)),
            text: item.description,
            image: item.urlToImage,
            link: item.url,
            keyword: keys,
          })
        })
        return news
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }
}
