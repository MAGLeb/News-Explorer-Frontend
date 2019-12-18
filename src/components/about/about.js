export default class About {
  constructor(text) {
    this.title = document.querySelector('.author__title')
    this.firstSub = document.querySelector('.author__first')
    this.secondSub = document.querySelector('.author__second')

    this.text = text

    this.renderAbout()
  }

  renderAbout() {
    this.title.textContent = this.text.title
    this.firstSub.textContent = this.text.first
    this.secondSub.textContent = this.text.second
  }
}
