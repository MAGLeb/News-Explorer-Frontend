import ApiBack from './api/api-back'
import {
  articles, signin, signup, logout, getInfoAboutMe
} from './config'
import validation from './validation/validation'
import Popup from './popup/popupEnter'
import PopupReg from './popup/popupReg'
import PopupSuccess from './popup/popupSuccess'
import Header from './header/header'

const initUI = () => {
  const apiBack = new ApiBack({
    articles, signin, signup, logout, getInfoAboutMe
  })

  const popupSuccess = new PopupSuccess(document.querySelector('.popup-success'))
  const popupEnter = new Popup(document.querySelector('.popup'), apiBack, validation)
  const popupReg = new PopupReg(document.querySelector('.popup-reg'), apiBack, validation, popupSuccess)

  const header = new Header(apiBack, popupEnter)
  header.renderHeader()

  return {
    apiBack,
    header,
    popupEnter,
    popupReg,
    popupSuccess
  }
}

export default initUI
