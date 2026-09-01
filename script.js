const filters = [...document.querySelectorAll('[data-filter]')]
const projects = [...document.querySelectorAll('[data-category]')]
const projectCount = document.querySelector('#project-count')
const header = document.querySelector('[data-header]')
const hero = document.querySelector('.hero')
const heroField = document.querySelector('.hero-field')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

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

const syncHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24)
}

syncHeader()
window.addEventListener('scroll', syncHeader, { passive: true })

if (!reducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('has-motion')

  const revealTargets = [
    ...document.querySelectorAll('.facts > div'),
    ...document.querySelectorAll('.section-intro'),
    ...document.querySelectorAll('.project'),
    ...document.querySelectorAll('.patent-row'),
    ...document.querySelectorAll('.profile-grid article'),
  ]

  revealTargets.forEach((element, index) => {
    element.classList.add('reveal')
    element.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`)
  })

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  )

  revealTargets.forEach((element) => revealObserver.observe(element))

  let frame = 0
  let targetX = 0
  let targetY = 0

  const paintParallax = () => {
    heroField.style.setProperty('--hero-x', `${targetX}px`)
    heroField.style.setProperty('--hero-y', `${targetY}px`)
    frame = 0
  }

  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect()
    targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14
    targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10
    if (!frame) frame = window.requestAnimationFrame(paintParallax)
  })

  hero.addEventListener('pointerleave', () => {
    targetX = 0
    targetY = 0
    if (!frame) frame = window.requestAnimationFrame(paintParallax)
  })
}

document.querySelector('[data-year]').textContent = new Date().getFullYear()
