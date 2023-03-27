const skills = document.getElementById('skills').children

let index = 0
skills[index].classList.add('saturated')

const interval = 3000

function updateActiveIcon() {
  skills[index].classList.remove('saturated')
  index = (index + 1) % skills.length
  skills[index].classList.add('saturated')
}

const skillsInterval = setInterval(updateActiveIcon, interval)

