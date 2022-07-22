// const projects = document.querySelector('.projects-icon ')
const tooltip = document.querySelector('tooltiptext')
const projects = document.querySelector('projects-icon')

// for (let i = 0; i < projects.length; i++) {
//   projects[i].addEventListener('mouseover', hoverOn)
//   projects[i].addEventListener('mouseout', hoverOff)
}

function hoverOn () {
  tooltip.style.visibility = 'hidden'
}
// // function hoverOff () {
// //   tooltip.classList.remove('tooltiptextvisible')
// // }

tooltip.addEventListener('mouseover', hoverOn)
