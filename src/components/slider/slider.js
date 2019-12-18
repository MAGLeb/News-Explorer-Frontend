/* eslint-disable no-nested-ternary */
import Flickity from 'flickity'
import DownloadCommits from './download-commits'
import RenderCommits from './render-commits'
import { month, gitUrl, maxGitCommits } from '../config'

const initSlider = () => {
  const carousel = document.querySelector('.slider')

  const hanlerDynamicGroupCell = () => (window.screen.width < 1280
    ? (window.screen.width < 1024 ? 1 : 2) : 3)

  const flkty = new Flickity(carousel, {
    cellAlign: 'center',
    contain: true,
    groupCells: () => { hanlerDynamicGroupCell() },
    selectedAttraction: 0.01,
    friction: 0.15,
  })

  const refreshFlkty = () => {
    flkty.destroy()
    return new Flickity(carousel, {
      cellAlign: 'center',
      contain: true,
      groupCells: () => { hanlerDynamicGroupCell() },
      selectedAttraction: 0.01,
      friction: 0.15,
    })
  }

  const downloadCommits = new DownloadCommits(gitUrl, maxGitCommits)
  const renderCommits = new RenderCommits(
    refreshFlkty.bind(flkty),
    downloadCommits.getCommits,
    month,
  )

  renderCommits.init()

}

export default initSlider
