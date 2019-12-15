export default function validation(form) {
  const inputs = Array.from(form.querySelectorAll('input'))
  const errors = Array.from(form.querySelectorAll('.popup__error'))
  const button = form.querySelector('button')

  const validateEmail = (email) => {
    const regular = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regular.test(email)
  }

  inputs.forEach((item, index) => {
    item.addEventListener('input', () => {
      if (item.name === 'email') {
        if (item.value === '') {
          errors[index].textContent = 'Это обязательное поле'
          errors[index].classList.add('popup__error_is-active')
        } else if (validateEmail(item.value)) {
          errors[index].classList.remove('popup__error_is-active')
        } else {
          errors[index].textContent = 'Неправильный формат email'
          errors[index].classList.add('popup__error_is-active')
        }
      }

      if (item.name === 'password') {
        if (item.value === '') {
          errors[index].textContent = 'Это обязательное поле'
          errors[index].classList.add('popup__error_is-active')
        } else if (item.value.length < 8) {
          errors[index].classList.add('popup__error_is-active')
          errors[index].textContent = 'Пароль не менее 8 символов'
        } else if (item.value.length <= 8) {
          errors[index].classList.remove('popup__error_is-active')
        }
      }

      if (item.name === 'name') {
        if (item.value === '') {
          errors[2].textContent = 'Это обязательное поле'
          errors[2].classList.add('popup__error_is-active')
        } else if (item.value.length === 1) {
          errors[2].classList.add('popup__error_is-active')
          errors[2].textContent = 'Имя должно быть от 2 до 30 символов'
        } else if (item.value.length <= 2) {
          errors[2].classList.remove('popup__error_is-active')
        }
      }

      const checkInputsValue = () => inputs.every((input) => input.value !== '')
      const checkErrorClass = () => errors.every((error) => !error.classList.contains('popup__error_is-active'))

      if (checkInputsValue() && checkErrorClass()) {
        button.classList.add('popup__button_is-active')
        button.classList.add('button')
        button.removeAttribute('disabled')
      } else {
        button.classList.remove('popup__button_is-active')
        button.classList.remove('button')
        button.setAttribute('disabled', 'true')
      }
    })
  })
}
