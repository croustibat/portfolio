const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>[]{}/_'

interface ScrambleOptions {
  duration?: number
  staggerDelay?: number
  scrambleIterations?: number
}

export function scrambleText(element: HTMLElement, options: ScrambleOptions = {}): void {
  const {
    staggerDelay = 25,
    scrambleIterations = 4
  } = options

  const originalText = element.getAttribute('data-text') || element.textContent || ''
  const chars = originalText.split('')

  element.textContent = ''
  element.style.visibility = 'visible'

  chars.forEach((char, index) => {
    const span = document.createElement('span')
    span.style.opacity = '0'
    span.textContent = char === ' ' ? '\u00A0' : '_'
    element.appendChild(span)

    const delay = index * staggerDelay

    setTimeout(() => {
      span.style.opacity = '1'

      if (char === ' ' || char === '\n') {
        span.textContent = char === ' ' ? '\u00A0' : char
        return
      }

      let iteration = 0
      const interval = setInterval(() => {
        if (iteration < scrambleIterations) {
          span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]
          iteration++
        } else {
          span.textContent = char
          clearInterval(interval)
        }
      }, 40)
    }, delay)
  })
}

export function initScrambleOnScroll(): void {
  // Watch for sections becoming active (via the .active class added by main.ts)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const section = mutation.target as HTMLElement
        if (section.classList.contains('active')) {
          triggerScrambleForSection(section)
        }
      }
    })
  })

  // Observe all content sections for class changes
  document.querySelectorAll('.content-section').forEach((section) => {
    observer.observe(section, { attributes: true, attributeFilter: ['class'] })
  })

  // Also check if any section is already active on load
  setTimeout(() => {
    document.querySelectorAll('.content-section.active').forEach((section) => {
      triggerScrambleForSection(section as HTMLElement)
    })
  }, 100)
}

function triggerScrambleForSection(section: HTMLElement): void {
  const elementsToScramble = section.querySelectorAll('[data-scramble]')

  elementsToScramble.forEach((el, index) => {
    const element = el as HTMLElement
    if (element.getAttribute('data-scrambled') === 'true') return

    element.setAttribute('data-scrambled', 'true')

    // Delay each element slightly for cascade effect
    setTimeout(() => {
      scrambleText(element, {
        staggerDelay: element.hasAttribute('data-scramble-fast') ? 15 : 25,
        scrambleIterations: element.hasAttribute('data-scramble-fast') ? 2 : 5
      })
    }, index * 200)
  })
}
