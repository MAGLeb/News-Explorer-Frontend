/* eslint-disable func-names */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import './style.css'
import '../../components/menu'
import Flickity from 'flickity'

const carousel = document.querySelector('.history__slider')

const hanlerDynamicGroupCell = () => (window.screen.width < 1280
  ? (window.screen.width < 1024 ? 1 : 2) : 3)

const flkty = new Flickity(carousel, {
  cellAlign: 'center',
  contain: true,
  groupCells: () => { hanlerDynamicGroupCell() },
  selectedAttraction: 0.01,
  friction: 0.15,
})

// show/hide history__link and history_button
const historyButton = document.querySelector('.history__button')
const historyTitleLink = document.querySelector('.history__title-link')

function handleShowHideHistoryButton(event) {
  if (window.screen.width < 768) {
    historyButton.classList.remove('history__button-hide')
    historyTitleLink.classList.add('history__title-link-hide')
  } else {
    historyButton.classList.add('history__button-hide')
    historyTitleLink.classList.remove('history__title-link-hide')
  }
}

window.onresize = () => handleShowHideHistoryButton()
window.addEventListener('resize', handleShowHideHistoryButton())
