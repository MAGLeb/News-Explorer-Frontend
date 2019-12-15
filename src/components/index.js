import ApiBack from './api-back'
import {
  articles, signin, signup, logout, getInfoAboutMe
} from './config'
import validation from './validation'
import Popup from './popup/popup'
import PopupReg from './popup/popupReg'
import PopupSuccess from './popup/popupSuccess'
import Header from './header'

const apiBack = new ApiBack({
  articles, signin, signup, logout, getInfoAboutMe
})

const popupSuccess = new PopupSuccess(document.querySelector('.popup-success'))
const popupEnter = new Popup(document.querySelector('.popup'), apiBack)
const popupReg = new PopupReg(document.querySelector('.popup-reg'), apiBack, popupSuccess)

const header = new Header(apiBack, popupEnter)
header.logStatus()

validation(popupEnter.popup.querySelector('.popup__form'))
validation(popupReg.popup.querySelector('.popup__form'))
