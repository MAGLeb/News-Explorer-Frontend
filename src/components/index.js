import ApiBack from './api-back'
import Popup from './popup/popup'
import validation from './validation'
import {
  articles, signin, signup, logout, getInfoAboutMe
} from './config'

const apiBack = new ApiBack({
  articles, signin, signup, logout, getInfoAboutMe
})

const popupEnter = new Popup(document.querySelector('.popup'), apiBack)

validation(popupEnter.popup.querySelector('.popup__form'))
