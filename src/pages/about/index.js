/* eslint-disable func-names */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import './style.css'
import Flickity from 'flickity'
import '../../components/index'
import DownloadCommits from '../../components/download-commits'
import RenderCommits from '../../components/render-commits'
import { month, gitUrl, maxGitCommits } from '../../components/config'

// Slider settings
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
