/* eslint-disable no-unused-vars */
import './style.css'
import initUI from '../../components/index'
import initSlider from '../../components/slider/slider'
import About from '../../components/about/about'
import { normalAbout } from '../../components/config'

const about = new About(normalAbout)
about.renderAbout()

const pageUI = initUI()
const pageSlider = initSlider()
