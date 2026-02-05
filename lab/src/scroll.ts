import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { LabScene, SceneState } from './scene'
import type { AudioEngine } from './audio'

gsap.registerPlugin(ScrollTrigger)

export type ScrollState = 'boot' | 'pulse' | 'collision' | 'pattern'

interface ScrollCallbacks {
  onStateChange?: (state: ScrollState, progress: number) => void
  onProgress?: (progress: number) => void
}

export class ScrollController {
  private scene: LabScene
  private audio: AudioEngine | null
  private callbacks: ScrollCallbacks
  private currentState: ScrollState = 'boot'
  private progress: number = 0

  constructor(scene: LabScene, audio: AudioEngine | null, callbacks: ScrollCallbacks = {}) {
    this.scene = scene
    this.audio = audio
    this.callbacks = callbacks

    this.initScrollTrigger()
  }

  private initScrollTrigger(): void {
    ScrollTrigger.create({
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        this.progress = self.progress
        this.updateState(this.progress)
        this.callbacks.onProgress?.(this.progress)
      },
    })
  }

  private updateState(progress: number): void {
    // Determine state based on progress
    let newState: ScrollState
    let sceneState: Partial<SceneState>

    if (progress < 0.1) {
      // BOOT: 0-10%
      newState = 'boot'
      sceneState = {
        progress,
        pulseAmount: 0,
        chaosAmount: 0,
        patternAmount: 0,
      }
    } else if (progress < 0.4) {
      // PULSE: 10-40%
      newState = 'pulse'
      const localProgress = (progress - 0.1) / 0.3 // 0-1 within this phase
      sceneState = {
        progress,
        pulseAmount: localProgress,
        chaosAmount: 0,
        patternAmount: 0,
      }
    } else if (progress < 0.75) {
      // COLLISION: 40-75%
      newState = 'collision'
      const localProgress = (progress - 0.4) / 0.35 // 0-1 within this phase
      sceneState = {
        progress,
        pulseAmount: 1,
        chaosAmount: localProgress,
        patternAmount: 0,
      }
    } else {
      // PATTERN: 75-100%
      newState = 'pattern'
      const localProgress = (progress - 0.75) / 0.25 // 0-1 within this phase
      sceneState = {
        progress,
        pulseAmount: 1 - localProgress * 0.5, // Reduce breathing
        chaosAmount: 1 - localProgress, // Calm down
        patternAmount: localProgress,
      }
    }

    // Update scene state
    this.scene.setState(sceneState)

    // Update audio
    if (this.audio) {
      this.audio.setProgress(progress)
    }

    // Handle state change
    if (newState !== this.currentState) {
      this.currentState = newState
      this.callbacks.onStateChange?.(newState, progress)
      this.onStateChange(newState)
    }

    // Update UI based on progress
    this.updateUI(progress, newState)
  }

  private onStateChange(state: ScrollState): void {
    console.log(`[LAB] State: ${state}`)
  }

  private updateUI(_progress: number, _state: ScrollState): void {
    // UI updates handled in main.ts
  }

  public getProgress(): number {
    return this.progress
  }

  public getState(): ScrollState {
    return this.currentState
  }

  public dispose(): void {
    ScrollTrigger.killAll()
  }
}
