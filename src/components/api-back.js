/* eslint-disable no-unused-vars */
export default class ApiBack {
  constructor(options) {
    this.signin = this.options.signin
    this.signup = this.options.signup
    this.getUser = this.options.getUser
    this.articles = this.options.articles
  }

  /* TODO logout */

  getAllArticles() {
    return fetch(this.articles,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Ошибка чтения карточек ${res.status}`)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  getInfoAboutMe() {
    return fetch(this.getUser, {
      credentials: 'include'
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error info about user: ${res.status}`)
      })
      .then((userInfo) => userInfo.user)
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  signin(data) {
    return fetch(this.signin,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error enter: ${res.status}`)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  signup(data) {
    return fetch(this.signup,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error signup ${res.status}`)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  saveArticle(data) {
    return fetch(this.articles,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error save card ${res.status}`)
      })
      .then((res) => res._id)
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  deleteArticle(id) {
    return fetch(`${this.articles}/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'incude',
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error delete card ${res.status}`)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }
}
