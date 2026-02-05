import * as THREE from 'three'
import vertexShader from './shader/base.vert'
import fragmentShader from './shader/metaballs.frag'

export interface Blob {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  targetX: number
  targetY: number
}

export interface SceneState {
  progress: number
  pulseAmount: number
  chaosAmount: number
  patternAmount: number
}

const MAX_BLOBS = 30

export class LabScene {
  private canvas: HTMLCanvasElement
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.OrthographicCamera
  private material: THREE.ShaderMaterial
  private blobs: Blob[] = []
  private clock: THREE.Clock
  private state: SceneState = {
    progress: 0,
    pulseAmount: 0,
    chaosAmount: 0,
    patternAmount: 0,
  }
  private mouse: { x: number; y: number; isOverBlobs: boolean } = { x: 0, y: 0, isOverBlobs: false }
  private isExploding: boolean = false
  private explodeTime: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.clock = new THREE.Clock()

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    // Scene
    this.scene = new THREE.Scene()

    // Orthographic camera for fullscreen quad
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    // Shader material
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uBlobPositions: { value: new Array(MAX_BLOBS).fill(null).map(() => new THREE.Vector3(0, 0, 0)) },
        uBlobCount: { value: 0 },
        uPulseAmount: { value: 0 },
        uChaosAmount: { value: 0 },
        uPatternAmount: { value: 0 },
      },
    })

    // Fullscreen quad
    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, this.material)
    this.scene.add(mesh)

    // Initialize blobs
    this.initBlobs()

    // Handle resize
    window.addEventListener('resize', this.onResize.bind(this))

    // Mouse interactions
    this.canvas.addEventListener('click', this.onClick.bind(this))
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
  }

  private initBlobs(): void {
    // Start with a few blobs clustered near center
    const initialCount = 6

    for (let i = 0; i < initialCount; i++) {
      const angle = (i / initialCount) * Math.PI * 2
      const dist = 0.1 + Math.random() * 0.15

      this.blobs.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        vx: 0,
        vy: 0,
        radius: 0.08 + Math.random() * 0.06,
        baseRadius: 0.08 + Math.random() * 0.06,
        targetX: 0,
        targetY: 0,
      })
    }

    this.updateBlobUniforms()
  }

  private updateBlobUniforms(): void {
    const positions = this.material.uniforms.uBlobPositions.value as THREE.Vector3[]

    for (let i = 0; i < MAX_BLOBS; i++) {
      if (i < this.blobs.length) {
        const blob = this.blobs[i]
        positions[i].set(blob.x, blob.y, blob.radius)
      } else {
        positions[i].set(0, 0, 0)
      }
    }

    this.material.uniforms.uBlobCount.value = this.blobs.length
  }

  public setState(state: Partial<SceneState>): void {
    Object.assign(this.state, state)
  }

  private updatePhysics(deltaTime: number): void {
    const { progress, chaosAmount, patternAmount } = this.state
    const dt = Math.min(deltaTime, 0.05)
    const time = this.clock.getElapsedTime()

    // After explosion, gradually pull back to center
    if (!this.isExploding && this.explodeTime > 0) {
      const timeSinceExplosion = time - this.explodeTime
      if (timeSinceExplosion > 0.8) {
        // Strong pull back after explosion - magnetic snap back
        const pullStrength = Math.min((timeSinceExplosion - 0.8) * 2, 3)
        for (const blob of this.blobs) {
          blob.vx -= blob.x * pullStrength * dt
          blob.vy -= blob.y * pullStrength * dt
        }
      }
    }

    // Mouse repulsion when hovering
    if (this.mouse.isOverBlobs) {
      for (const blob of this.blobs) {
        const dx = blob.x - this.mouse.x
        const dy = blob.y - this.mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.5 && dist > 0.01) {
          const force = 0.3 / dist
          blob.vx += (dx / dist) * force * dt
          blob.vy += (dy / dist) * force * dt
        }
      }
    }

    // Entropy increases with scroll progress
    const entropy = progress * progress // Exponential increase
    const baseSpeed = 0.3 + entropy * 2

    // Add/remove blobs based on progress
    const targetBlobCount = Math.floor(6 + progress * 10)
    while (this.blobs.length < targetBlobCount && this.blobs.length < MAX_BLOBS) {
      const angle = Math.random() * Math.PI * 2
      const dist = 1.2
      this.blobs.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        vx: -Math.cos(angle) * baseSpeed,
        vy: -Math.sin(angle) * baseSpeed,
        radius: 0.06 + Math.random() * 0.08,
        baseRadius: 0.06 + Math.random() * 0.08,
        targetX: 0,
        targetY: 0,
      })
    }

    // Physics simulation
    for (let i = 0; i < this.blobs.length; i++) {
      const blob = this.blobs[i]

      // Pattern formation targets (spiral)
      if (patternAmount > 0.3) {
        const spiralAngle = (i / this.blobs.length) * Math.PI * 2 + time * 0.1
        const spiralDist = 0.3 + (i / this.blobs.length) * 0.4
        blob.targetX = Math.cos(spiralAngle) * spiralDist
        blob.targetY = Math.sin(spiralAngle) * spiralDist

        const dx = blob.targetX - blob.x
        const dy = blob.targetY - blob.y
        blob.vx += dx * patternAmount * 0.5 * dt
        blob.vy += dy * patternAmount * 0.5 * dt
      }

      // ENHANCED: Chaos forces scale with scroll progress
      const chaosIntensity = chaosAmount + entropy * 1.5
      if (chaosIntensity > 0) {
        // Random impulses
        blob.vx += (Math.random() - 0.5) * chaosIntensity * 3 * dt
        blob.vy += (Math.random() - 0.5) * chaosIntensity * 3 * dt

        // Occasional strong kicks
        if (Math.random() < entropy * 0.05) {
          const kickAngle = Math.random() * Math.PI * 2
          const kickForce = entropy * 0.5
          blob.vx += Math.cos(kickAngle) * kickForce
          blob.vy += Math.sin(kickAngle) * kickForce
        }
      }

      // Perlin-like smooth noise movement
      const noiseX = Math.sin(time * 0.7 + i * 1.3) * Math.cos(time * 0.4 + i * 0.7)
      const noiseY = Math.cos(time * 0.5 + i * 1.7) * Math.sin(time * 0.6 + i * 1.1)
      blob.vx += noiseX * entropy * 0.8 * dt
      blob.vy += noiseY * entropy * 0.8 * dt

      // Attraction to center (reduces with entropy)
      const centerPull = 0.4 * (1 - patternAmount) * (1 - entropy * 0.5)
      blob.vx -= blob.x * centerPull * dt
      blob.vy -= blob.y * centerPull * dt

      // Blob-blob repulsion (stronger with entropy)
      for (let j = i + 1; j < this.blobs.length; j++) {
        const other = this.blobs[j]
        const dx = other.x - blob.x
        const dy = other.y - blob.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const minDist = (blob.radius + other.radius) * (1.5 + entropy * 0.5)

        if (dist < minDist && dist > 0.001) {
          const force = ((minDist - dist) / minDist) * (0.5 + entropy * 0.8)
          const nx = dx / dist
          const ny = dy / dist

          blob.vx -= nx * force * dt
          blob.vy -= ny * force * dt
          other.vx += nx * force * dt
          other.vy += ny * force * dt
        }
      }

      // Damping (less damping = more chaotic with progress)
      const damping = 0.96 - entropy * 0.06
      blob.vx *= damping
      blob.vy *= damping

      // Apply velocity
      blob.x += blob.vx * dt
      blob.y += blob.vy * dt

      // Boundary - softer with entropy
      const bound = 1.2 + entropy * 0.3
      if (Math.abs(blob.x) > bound) {
        blob.vx *= -0.5
        blob.x = Math.sign(blob.x) * bound
      }
      if (Math.abs(blob.y) > bound) {
        blob.vy *= -0.5
        blob.y = Math.sign(blob.y) * bound
      }

      // Radius variation (more with entropy)
      const radiusPulse = Math.sin(time * 2 + i) * entropy * 0.15
      blob.radius = blob.baseRadius * (0.9 + progress * 0.3 + radiusPulse)
    }

    this.updateBlobUniforms()
  }

  private onResize(): void {
    const width = window.innerWidth
    const height = window.innerHeight

    this.renderer.setSize(width, height)
    this.material.uniforms.uResolution.value.set(width, height)
  }

  public render(): void {
    const deltaTime = this.clock.getDelta()
    const elapsedTime = this.clock.getElapsedTime()

    // Update physics
    this.updatePhysics(deltaTime)

    // Update uniforms
    this.material.uniforms.uTime.value = elapsedTime
    this.material.uniforms.uProgress.value = this.state.progress
    this.material.uniforms.uPulseAmount.value = this.state.pulseAmount
    this.material.uniforms.uChaosAmount.value = this.state.chaosAmount
    this.material.uniforms.uPatternAmount.value = this.state.patternAmount

    // Render
    this.renderer.render(this.scene, this.camera)
  }

  private onClick(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

    // Correct for aspect ratio
    const aspect = rect.width / rect.height
    const uvX = x * aspect
    const uvY = y

    // Spawn new blob at click position
    if (this.blobs.length < MAX_BLOBS) {
      const targetAngle = Math.atan2(-uvY, -uvX)
      this.blobs.push({
        x: uvX,
        y: uvY,
        vx: Math.cos(targetAngle) * 0.5,
        vy: Math.sin(targetAngle) * 0.5,
        radius: 0.05 + Math.random() * 0.05,
        baseRadius: 0.05 + Math.random() * 0.05,
        targetX: 0,
        targetY: 0,
      })
    }
  }

  private onMouseMove(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

    const aspect = rect.width / rect.height
    this.mouse.x = x * aspect
    this.mouse.y = y

    // Check if mouse is over blob mass
    let isOver = false
    for (const blob of this.blobs) {
      const dx = this.mouse.x - blob.x
      const dy = this.mouse.y - blob.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < blob.radius * 2) {
        isOver = true
        break
      }
    }

    // Trigger explosion when entering blob area
    if (isOver && !this.mouse.isOverBlobs && !this.isExploding) {
      this.triggerExplosion()
    }
    this.mouse.isOverBlobs = isOver
  }

  public spawnBlobAt(clientX: number, clientY: number): void {
    const rect = this.canvas.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((clientY - rect.top) / rect.height) * 2 - 1)

    const aspect = rect.width / rect.height
    const uvX = x * aspect
    const uvY = y

    if (this.blobs.length < MAX_BLOBS) {
      // Direction towards center
      const targetAngle = Math.atan2(-uvY, -uvX)
      this.blobs.push({
        x: uvX,
        y: uvY,
        vx: Math.cos(targetAngle) * 0.8,
        vy: Math.sin(targetAngle) * 0.8,
        radius: 0.06 + Math.random() * 0.06,
        baseRadius: 0.06 + Math.random() * 0.06,
        targetX: 0,
        targetY: 0,
      })
      console.log('[LAB] Blob spawned at', uvX.toFixed(2), uvY.toFixed(2))
    }
  }

  private triggerExplosion(): void {
    this.isExploding = true
    this.explodeTime = this.clock.getElapsedTime()

    // MASSIVE explosion - send all blobs flying
    for (const blob of this.blobs) {
      const angle = Math.atan2(blob.y, blob.x)
      // Random angle variation for more chaos
      const angleVariation = (Math.random() - 0.5) * 0.8
      const finalAngle = angle + angleVariation

      // Much stronger force - 3x to 6x stronger
      const force = 4 + Math.random() * 4
      blob.vx = Math.cos(finalAngle) * force
      blob.vy = Math.sin(finalAngle) * force

      // Also randomize radius for visual chaos
      blob.radius = blob.baseRadius * (0.8 + Math.random() * 0.6)
    }

    // Longer recovery time
    setTimeout(() => {
      this.isExploding = false
    }, 1500)
  }

  public dispose(): void {
    this.renderer.dispose()
    this.material.dispose()
    window.removeEventListener('resize', this.onResize.bind(this))
  }
}
