/* eslint-disable no-plusplus */
export default class DownloadCommits {
  constructor(url, maxCommits = 5) {
    this.url = url
    this.maxCommits = maxCommits

    this.getCommits = this.getCommits.bind(this)
  }

  getCommits() {
    return fetch(this.url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Error git commits ${res.status}`)
      })
      .then((data) => {
        const commits = []
        const total = Array.from(Object.keys(data)).length
        const countCommits = total < this.maxCommits ? total : this.maxCommits
        for (let i = 0; i < countCommits; i++) {
          commits.push({
            name: data[i].commit.committer.name,
            email: data[i].commit.committer.email,
            date: new Date(Date.parse(data[i].commit.committer.date)),
            message: data[i].commit.message,
            avatar: data[i].author.avatar_url,
          })
        }
        return commits
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }
}
