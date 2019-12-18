/* eslint-disable no-plusplus */
export default class ApiNews {
  constructor(publicNewsUrl) {
    this.publicNewsUrl = publicNewsUrl
  }

  initNews(keys) {
    const dateNow = new Date()
    const dateMinusWeek = new Date(dateNow - 7 * 24 * 3600 * 1000)
    const dateTo = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`
    const dateFrom = `${dateMinusWeek.getFullYear()}-${dateMinusWeek.getMonth() + 1}-${dateMinusWeek.getDate()}`
    const url = `${this.publicNewsUrl}&q=${keys}&from=${dateFrom}&to=${dateTo}`
    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong')
        return res.json()
      })
      .then((data) => {
        const news = []
        for (let i = 0; i < data.articles.length; i++) {
          news.push({
            source: data.articles[i].source.name,
            title: data.articles[i].title,
            date: new Date(Date.parse(data.articles[i].publishedAt)),
            text: data.articles[i].description,
            image: data.articles[i].urlToImage,
            link: data.articles[i].url,
            keyword: keys,
          })
        }
        return news
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }
}
