/* eslint-disable func-names */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import './style.css'
import Flickity from 'flickity'

// Slider settings
const carousel = document.querySelector('.slider')

const hanlerDynamicGroupCell = () => (window.screen.width < 1280
  ? (window.screen.width < 1024 ? 1 : 2) : 3)

const flkty = new Flickity(carousel, {
  cellAlign: 'center',
  contain: true,
  groupCells: () => { hanlerDynamicGroupCell() },
  selectedAttraction: 0.01,
  friction: 0.15,
})
