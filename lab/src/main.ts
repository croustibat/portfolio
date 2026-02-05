import './styles.css'
import { LabScene } from './scene'
import { ScrollController } from './scroll'
import { AudioEngine } from './audio'
import { initScrambleOnScroll } from './scramble'

class Lab {
  private scene: LabScene
  private scroll: ScrollController
  private audio: AudioEngine
  private animationId: number = 0
  private soundToggle: HTMLElement | null
  private scrollProgress: HTMLElement | null
  private scrollHint: HTMLElement | null
  private sectionCounter: HTMLElement | null
  private sectionLabels: NodeListOf<HTMLElement>
  private endState: HTMLElement | null
  private contentSections: NodeListOf<HTMLElement>

  constructor() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas) throw new Error('Canvas not found')

    // Initialize components
    this.scene = new LabScene(canvas)
    this.audio = new AudioEngine()
    this.scroll = new ScrollController(this.scene, this.audio, {
      onStateChange: this.onStateChange.bind(this),
      onProgress: this.onProgress.bind(this),
    })

    // UI elements
    this.soundToggle = document.getElementById('sound-toggle')
    this.scrollProgress = document.querySelector('.scroll-progress')
    this.scrollHint = document.querySelector('.scroll-hint')
    this.sectionCounter = document.querySelector('.section-current')
    this.sectionLabels = document.querySelectorAll('.section-label')
    this.endState = document.querySelector('.end-state')
    this.contentSections = document.querySelectorAll('.content-section')

    this.initSoundToggle()
    this.animate()

    // Init scramble text effect
    initScrambleOnScroll()

    // Global click handler for creating blobs (bypass content sections)
    document.addEventListener('click', (e) => {
      // Don't create blobs when clicking on interactive elements
      const target = e.target as HTMLElement
      if (target.closest('a, button, .sound-btn')) return

      this.scene.spawnBlobAt(e.clientX, e.clientY)
    })

    console.log('[LAB] Initialized')
  }

  private initSoundToggle(): void {
    if (!this.soundToggle) return

    this.soundToggle.addEventListener('click', async () => {
      const enabled = await this.toggleSound()
      this.updateSoundToggleUI(enabled)
    })
  }

  private async toggleSound(): Promise<boolean> {
    const enabled = this.audio.toggle()
    if (enabled) {
      await this.audio.enable()
    }
    return this.audio.getEnabled()
  }

  private updateSoundToggleUI(enabled: boolean): void {
    if (!this.soundToggle) return
    if (enabled) {
      this.soundToggle.classList.add('active')
    } else {
      this.soundToggle.classList.remove('active')
    }
  }

  private onStateChange(state: string, progress: number): void {
    console.log(`[LAB] State: ${state} at ${(progress * 100).toFixed(1)}%`)
  }

  private onProgress(progress: number): void {
    this.audio.update()
    this.updateUI(progress)
  }

  private updateUI(progress: number): void {
    // Update scroll progress bar
    if (this.scrollProgress) {
      this.scrollProgress.style.height = `${progress * 100}%`
    }

    // Hide scroll hint after scrolling
    if (this.scrollHint) {
      if (progress > 0.05) {
        this.scrollHint.classList.add('hidden')
      } else {
        this.scrollHint.classList.remove('hidden')
      }
    }

    // Update section counter
    const sectionIndex = Math.min(4, Math.floor(progress * 5))
    if (this.sectionCounter) {
      this.sectionCounter.textContent = sectionIndex.toString().padStart(2, '0')
    }

    // Update section labels
    this.sectionLabels.forEach((label, index) => {
      const sectionStart = index / 5
      const sectionEnd = (index + 1) / 5
      const isActive = progress >= sectionStart && progress < sectionEnd

      if (isActive) {
        label.classList.add('active')
      } else {
        label.classList.remove('active')
      }
    })

    // Show end state
    if (this.endState) {
      if (progress > 0.92) {
        this.endState.classList.add('visible')
      } else {
        this.endState.classList.remove('visible')
      }
    }

    // Update content sections visibility
    this.contentSections.forEach((section, index) => {
      const sectionStart = index / 5 - 0.1
      const sectionEnd = (index + 1) / 5 + 0.1
      const isActive = progress >= sectionStart && progress < sectionEnd

      if (isActive) {
        section.classList.add('active')
      } else {
        section.classList.remove('active')
      }
    })
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(this.animate.bind(this))
    this.scene.render()
  }

  public dispose(): void {
    cancelAnimationFrame(this.animationId)
    this.scene.dispose()
    this.scroll.dispose()
    this.audio.dispose()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Lab()
})
