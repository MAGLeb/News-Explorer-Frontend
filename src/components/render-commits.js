export default class RenderCommits {
  constructor(swiper, getCommits, month) {
    this.swiperUpdate = swiper
    this.getCommits = getCommits
    this.month = month
  }

  init() {
    this.getCommits()
      .then((data) => {
        this.render(data)
      })
      .catch((err) => {
        console.log(err.message)
        document.querySelector('.history').style.display = 'none'
      })
  }

  create(data) {
    const container = document.querySelector('#commit-template').content.cloneNode(true)

    container.querySelector('.slider__data').textContent = `${data.date.getDate()} ${this.month[data.date.getMonth()]} ${data.date.getFullYear()}`
    container.querySelector('.slider__name').textContent = data.name
    container.querySelector('.slider__email').textContent = data.email
    container.querySelector('.slider__view').textContent = data.message
    return container
  }

  render(data) {
    const container = document.createDocumentFragment()
    data.forEach((item) => {
      container.appendChild(this.create(item))
    })
    document.querySelector('.slider').appendChild(container)
    this.swiperUpdate()
  }
}
