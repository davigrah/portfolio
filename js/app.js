
// NIGHT MODE SWITCH
const buttonSwitch = document.getElementById('tooglenight')
const navBar = document.querySelector('[data-navbar-darkmode]')
const navButton = document.querySelector('[data-navbutton-darkmode]')
const header = document.querySelector('[data-header-darkmode]')
const headerBackground = document.querySelector('[data-backgroundheader-darkmode]')
const arrowContainer = document.querySelector('[data-arrow-container-darkmode]')
const arrowWrapper = document.querySelector('[data-arrow-wrapper-darkmode]')
const arrow = document.querySelector('[data-arrow-darkmode]')
const arrowPath = document.querySelector('[data-arrow-path-darkmode]')
const headingText = document.querySelector('[data-headingtext-darkmode]')
const aboutH1 = document.querySelector('[data-about-h1-darkmode]')
const aboutP = document.querySelector('[data-about-p-darkmode]')
const backgroundSkills = document.querySelector('[data-background-skills-darkmode]')
const skills = document.querySelector('[data-skills-darkmode]')
const skillsSection = document.querySelector('[data-section-skills]')
const skillsH1 = document.querySelector('[data-skills-h1-darkmode]')
const htmlIcon = document.querySelector('[data-html-icon-darkmode]')
const cssIcon = document.querySelector('[data-css-icon-darkmode]')
const scssIcon = document.querySelector('[data-scss-icon-darkmode]')
const jsIcon = document.querySelector('[data-js-icon-darkmode]')
const projects = document.querySelector('[data-projects-darkmode]')
const projectsContainer = document.querySelector('[data-projects-container-darkmode]')
const projectsH1 = document.querySelector('[data-projects-h1-darkmode]')
const responsiveLayoutIcon = document.querySelector('[data-responsive-layout-icon-darkmode]')
const webAppDashboardIcon = document.querySelector('[data-web-app-dashboard-icon-darkmode]')
const studentsDirectoryIcon = document.querySelector('[data-students-directory-icon-darkmode]')
const gameShowAppIcon = document.querySelector('[data-game-show-app-icon-darkmode]')
const toDoListIcon = document.querySelector('[data-to-do-list-icon-darkmode]')
const photoGalleryIcon = document.querySelector('[data-photo-gallery-icon-darkmode]')
const contactBackground = document.querySelector('[data-contact-background]')
const contactH1 = document.querySelector('[data-contact-h1-darkmode]')
const btn = document.querySelector('[data-btn-darkmode]')

const bodyProject1 = document.querySelector('[data-body-darkmode]')
const returnProject1 = document.querySelector('[data-return-darkmode]')
const projectPageH1 = document.querySelector('[data-project-h1-darkmode]')
const projectPageP = document.querySelector('[data-project-p-darkmode]')
const projectPageGithubIcon = document.querySelector('[data-github-project-page-darkmode]')
const projectPageViewIcon = document.querySelector('[data-liveview-darkmode]')

buttonSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  navBar.classList.toggle('dark')
  navButton.classList.toggle('text-white')
  navButton.classList.toggle('dark')
  header.classList.toggle('dark')
  headerBackground.classList.toggle('dark')
  arrowContainer.classList.toggle('dark')
  arrowWrapper.classList.toggle('dark')
  arrow.classList.toggle('dark')
  arrowPath.classList.toggle('dark')
  headingText.classList.toggle('dark')
  aboutH1.classList.toggle('text-white')
  aboutP.classList.toggle('text-white')
  backgroundSkills.classList.toggle('dark')
  skills.classList.toggle('dark')
  skillsSection.classList.toggle('dark')
  skillsH1.classList.toggle('text-black')
  htmlIcon.classList.toggle('dark')
  cssIcon.classList.toggle('dark')
  scssIcon.classList.toggle('dark')
  jsIcon.classList.toggle('dark')
  projects.classList.toggle('dark')
  projectsContainer.classList.toggle('dark')
  projectsH1.classList.toggle('text-black')
  responsiveLayoutIcon.classList.toggle('dark')
  webAppDashboardIcon.classList.toggle('dark')
  studentsDirectoryIcon.classList.toggle('dark')
  gameShowAppIcon.classList.toggle('dark')
  toDoListIcon.classList.toggle('dark')
  photoGalleryIcon.classList.toggle('dark')
  tooltip1.classList.toggle('dark')
  tooltip2.classList.toggle('dark')
  tooltip3.classList.toggle('dark')
  tooltip4.classList.toggle('dark')
  tooltip5.classList.toggle('dark')
  tooltip6.classList.toggle('dark')
  contactBackground.classList.toggle('dark')
  contactH1.classList.toggle('dark')
  btn.classList.toggle('dark')
  bodyProject1.classList.toggle('dark')
})

buttonSwitch.addEventListener('click', () => {
  returnProject1.classList.toggle('dark')
  projectPageH1.classList.toggle('text-black')
  projectPageP.classList.toggle('text-black')
  projectPageGithubIcon.classList.toggle('dark')
  projectPageViewIcon.classList.toggle('dark')
})

// TOOLTIP ON MOUSE OVER
const tooltip1 = document.querySelector('.tooltiptext-1')
const tooltip2 = document.querySelector('.tooltiptext-2')
const tooltip3 = document.querySelector('.tooltiptext-3')
const tooltip4 = document.querySelector('.tooltiptext-4')
const tooltip5 = document.querySelector('.tooltiptext-5')
const tooltip6 = document.querySelector('.tooltiptext-6')
const project1 = document.querySelector('.project-icon-1')
const project2 = document.querySelector('.project-icon-2')
const project3 = document.querySelector('.project-icon-3')
const project4 = document.querySelector('.project-icon-4')
const project5 = document.querySelector('.project-icon-5')
const project6 = document.querySelector('.project-icon-6')

project1.addEventListener('mouseover', hoverOn1)
project2.addEventListener('mouseover', hoverOn2)
project3.addEventListener('mouseover', hoverOn3)
project4.addEventListener('mouseover', hoverOn4)
project5.addEventListener('mouseover', hoverOn5)
project6.addEventListener('mouseover', hoverOn6)

project1.addEventListener('mouseout', mouseout1)
project2.addEventListener('mouseout', mouseout2)
project3.addEventListener('mouseout', mouseout3)
project4.addEventListener('mouseout', mouseout4)
project5.addEventListener('mouseout', mouseout5)
project6.addEventListener('mouseout', mouseout6)

function hoverOn1 () {
  tooltip1.style.opacity = '1'
  project1.style.opacity = '0'
}

function hoverOn2 () {
  tooltip2.style.opacity = '1'
  project2.style.opacity = '0'
}

function hoverOn3 () {
  tooltip3.style.opacity = '1'
  project3.style.opacity = '0'
}

function hoverOn4 () {
  tooltip4.style.opacity = '1'
  project4.style.opacity = '0'
}

function hoverOn5 () {
  tooltip5.style.opacity = '1'
  project5.style.opacity = '0'
}

function hoverOn6 () {
  tooltip6.style.opacity = '1'
  project6.style.opacity = '0'
}

function mouseout1 () {
  tooltip1.style.opacity = '0'
  project1.style.opacity = '1'
}

function mouseout2 () {
  tooltip2.style.opacity = '0'
  project2.style.opacity = '1'
}

function mouseout3 () {
  tooltip3.style.opacity = '0'
  project3.style.opacity = '1'
}

function mouseout4 () {
  tooltip4.style.opacity = '0'
  project4.style.opacity = '1'
}

function mouseout5 () {
  tooltip5.style.opacity = '0'
  project5.style.opacity = '1'
}

function mouseout6 () {
  tooltip6.style.opacity = '0'
  project6.style.opacity = '1'
}
