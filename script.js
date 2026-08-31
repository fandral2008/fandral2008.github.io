const filters = [...document.querySelectorAll('[data-filter]')]
const projects = [...document.querySelectorAll('[data-category]')]
const projectCount = document.querySelector('#project-count')

projectCount.textContent = `${projects.length} 个项目`

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter

    filters.forEach((filter) => {
      const isActive = filter === button
      filter.classList.toggle('is-active', isActive)
      filter.setAttribute('aria-pressed', String(isActive))
    })

    let visibleCount = 0

    projects.forEach((project) => {
      const categories = project.dataset.category.split(' ')
      const isVisible = selected === 'all' || categories.includes(selected)
      project.hidden = !isVisible
      visibleCount += Number(isVisible)
    })

    projectCount.textContent = `${visibleCount} 个项目`
  })
})

document.querySelector('[data-year]').textContent = new Date().getFullYear()
