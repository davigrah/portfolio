// const projects = document.querySelector('.projects-icon ')
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

// for (let i = 0; i < projects.length; i++) {
//   projects[i].addEventListener('mouseover', hoverOn)
// //   projects[i].addEventListener('mouseout', hoverOff)
// }

project1.addEventListener('mouseover', hoverOn1);
project2.addEventListener('mouseover', hoverOn2);
project3.addEventListener('mouseover', hoverOn3);
project4.addEventListener('mouseover', hoverOn4);
project5.addEventListener('mouseover', hoverOn5);
project6.addEventListener('mouseover', hoverOn6);

function hoverOn1 () {
  tooltip1.style.visibility = 'hidden'
}

function hoverOn2 () {
  tooltip2.style.visibility = 'hidden'
}

function hoverOn3 () {
  tooltip3.style.visibility = 'hidden'
}

function hoverOn4 () {
  tooltip4.style.visibility = 'hidden'
}

function hoverOn5 () {
  tooltip5.style.visibility = 'hidden'
}

function hoverOn6 () {
  tooltip6.style.visibility = 'hidden'
}
// function hoverOff () {
//   tooltip.classList.remove('tooltiptextvisible')
// }


