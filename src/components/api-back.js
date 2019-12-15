/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
export default class ApiBack {
  constructor({
    articles, signin, signup, logout, getInfoAboutMe
  }) {
    this.signinUrl = signin
    this.signupUrl = signup
    this.getInfoAboutMeUrl = getInfoAboutMe
    this.articlesUrl = articles
    this.logoutUrl = logout

    this.logout = this.logout.bind(this)
  }

  logout() {
    return fetch(this.logoutUrl,
      {
        method: 'POST',
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
        throw new Error(`Error logout ${res.status}`)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  getAllArticles() {
    return fetch(this.articlesUrl,
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
        throw new Error(`Error get articles  ${res.status}`)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  getInfoAboutMe() {
    return fetch(this.getInfoAboutMeUrl, {
      credentials: 'include'
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error info about user: ${res.status}`)
      })
      .then((userInfo) => userInfo.data.name)
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  signin(email, password) {
    return fetch(this.signinUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error enter: ${res.status} ${res.message}`)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }

  signup(email, password, name) {
    return fetch(this.signupUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          password,
          name,
          email,
        }),
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

  saveArticle(keyword, title, text, date, source, link, image) {
    return fetch(this.articlesUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          keyword,
          title,
          text,
          date,
          source,
          link,
          image,
        }),
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
    return fetch(`${this.articlesUrl}/${id}`,
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
