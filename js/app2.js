// const to the project pages
const buttonToogle = document.querySelector('#toogle')
const bodyProject1 = document.querySelector('[data-body-darkmode]')
const returnProject1 = document.querySelector('[data-return-darkmode]')
const projectPageH1 = document.querySelector('[data-project-h1-darkmode]')
const projectPageP = document.querySelector('[data-project-p-darkmode]')
const projectPageGithubIcon = document.querySelector('[data-github-project-page-darkmode]')
const projectPageViewIcon = document.querySelector('[data-liveview-darkmode]')
const navBar = document.querySelector('[data-navbar-darkmode]')
const navButton = document.querySelector('[data-navbutton-darkmode]')

buttonToogle.addEventListener('click', () => {
  bodyProject1.classList.toggle('dark')
  returnProject1.classList.toggle('dark')
  projectPageH1.classList.toggle('text-black')
  projectPageP.classList.toggle('text-black')
  projectPageGithubIcon.classList.toggle('dark')
  projectPageViewIcon.classList.toggle('dark')
  navBar.classList.toggle('dark')
  navButton.classList.toggle('text-white')
  navButton.classList.toggle('dark')
})
