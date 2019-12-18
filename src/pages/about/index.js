/* eslint-disable no-unused-vars */
import './style.css'
import initUI from '../../components/index'
import initSlider from '../../components/slider/slider'
import About from '../../components/about/about'
import { normalAbout } from '../../components/config'

const renderAbout = new About(normalAbout)

const pageUI = initUI()
const pageSlider = initSlider()
