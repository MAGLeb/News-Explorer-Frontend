import ApiBack from './api-back'
import Popup from './popup/popup'
import PopupReg from './popup/popupReg'
import PopupSuccess from './popup/popupSuccess'
import validation from './validation'
import {
  articles, signin, signup, logout, getInfoAboutMe
} from './config'

const apiBack = new ApiBack({
  articles, signin, signup, logout, getInfoAboutMe
})

const popupSuccess = new PopupSuccess(document.querySelector('.popup-success'))
const popupEnter = new Popup(document.querySelector('.popup'), apiBack)
const popupReg = new PopupReg(document.querySelector('.popup-reg'), apiBack, popupSuccess)

validation(popupEnter.popup.querySelector('.popup__form'))
validation(popupReg.popup.querySelector('.popup__form'))
