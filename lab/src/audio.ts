export class AudioEngine {
  private ctx: AudioContext | null = null
  private isEnabled: boolean = false
  private isInitialized: boolean = false

  // Audio nodes
  private subOsc: OscillatorNode | null = null
  private subOsc2: OscillatorNode | null = null
  private noiseSource: AudioBufferSourceNode | null = null
  private crackleSource: AudioBufferSourceNode | null = null
  private noiseBuffer: AudioBuffer | null = null
  private crackleBuffer: AudioBuffer | null = null
  private filter: BiquadFilterNode | null = null
  private highpassFilter: BiquadFilterNode | null = null
  private subGain: GainNode | null = null
  private noiseGain: GainNode | null = null
  private crackleGain: GainNode | null = null
  private masterGain: GainNode | null = null
  private compressor: DynamicsCompressorNode | null = null

  // State
  private progress: number = 0
  private targetFilterFreq: number = 200
  private currentFilterFreq: number = 200

  constructor() {}

  private async init(): Promise<void> {
    if (this.isInitialized) return

    this.ctx = new AudioContext()

    // Create noise buffer (brown noise - warmer)
    const bufferSize = this.ctx.sampleRate * 2
    this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
    const noiseData = this.noiseBuffer.getChannelData(0)
    let lastOut = 0
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1
      lastOut = (lastOut + 0.02 * white) / 1.02
      noiseData[i] = lastOut * 3.5
    }

    // Create crackle buffer (random impulses like vinyl)
    this.crackleBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
    const crackleData = this.crackleBuffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      // Random crackles with varying density
      if (Math.random() < 0.003) {
        // Crackle event
        const intensity = Math.random() * 0.8 + 0.2
        const decay = Math.floor(Math.random() * 200 + 50)
        for (let j = 0; j < decay && i + j < bufferSize; j++) {
          crackleData[i + j] = intensity * (1 - j / decay) * (Math.random() * 2 - 1)
        }
      }
    }

    // Compressor
    this.compressor = this.ctx.createDynamicsCompressor()
    this.compressor.threshold.value = -20
    this.compressor.knee.value = 20
    this.compressor.ratio.value = 8
    this.compressor.attack.value = 0.002
    this.compressor.release.value = 0.2

    // Master gain
    this.masterGain = this.ctx.createGain()
    this.masterGain.gain.value = 0

    // Lowpass filter
    this.filter = this.ctx.createBiquadFilter()
    this.filter.type = 'lowpass'
    this.filter.frequency.value = 200
    this.filter.Q.value = 2

    // Highpass filter for crackle
    this.highpassFilter = this.ctx.createBiquadFilter()
    this.highpassFilter.type = 'highpass'
    this.highpassFilter.frequency.value = 800
    this.highpassFilter.Q.value = 0.5

    // Sub oscillator 1 (main)
    this.subOsc = this.ctx.createOscillator()
    this.subOsc.type = 'sine'
    this.subOsc.frequency.value = 38

    // Sub oscillator 2 (detuned for beating)
    this.subOsc2 = this.ctx.createOscillator()
    this.subOsc2.type = 'sine'
    this.subOsc2.frequency.value = 40.5

    this.subGain = this.ctx.createGain()
    this.subGain.gain.value = 0.12

    // Connect subs
    this.subOsc.connect(this.subGain)
    this.subOsc2.connect(this.subGain)
    this.subGain.connect(this.filter)

    // Noise gain
    this.noiseGain = this.ctx.createGain()
    this.noiseGain.gain.value = 0.025

    // Crackle gain
    this.crackleGain = this.ctx.createGain()
    this.crackleGain.gain.value = 0.15

    // Connect chain
    this.filter.connect(this.compressor)
    this.highpassFilter.connect(this.compressor)
    this.compressor.connect(this.masterGain)
    this.masterGain.connect(this.ctx.destination)

    // Start oscillators
    this.subOsc.start()
    this.subOsc2.start()

    this.isInitialized = true
  }

  private startNoise(): void {
    if (!this.ctx || !this.noiseBuffer || !this.noiseGain || !this.filter) return

    if (this.noiseSource) {
      try { this.noiseSource.stop() } catch {}
    }

    this.noiseSource = this.ctx.createBufferSource()
    this.noiseSource.buffer = this.noiseBuffer
    this.noiseSource.loop = true
    this.noiseSource.connect(this.noiseGain)
    this.noiseGain.connect(this.filter)
    this.noiseSource.start()
  }

  private startCrackle(): void {
    if (!this.ctx || !this.crackleBuffer || !this.crackleGain || !this.highpassFilter) return

    if (this.crackleSource) {
      try { this.crackleSource.stop() } catch {}
    }

    this.crackleSource = this.ctx.createBufferSource()
    this.crackleSource.buffer = this.crackleBuffer
    this.crackleSource.loop = true
    this.crackleSource.playbackRate.value = 0.8 + Math.random() * 0.4
    this.crackleSource.connect(this.crackleGain)
    this.crackleGain.connect(this.highpassFilter)
    this.crackleSource.start()
  }

  public async enable(): Promise<void> {
    await this.init()
    this.isEnabled = true

    if (this.ctx?.state === 'suspended') {
      await this.ctx.resume()
    }

    this.startNoise()
    this.startCrackle()

    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0.6, this.ctx!.currentTime, 0.3)
    }
  }

  public disable(): void {
    this.isEnabled = false
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2)
    }
  }

  public toggle(): boolean {
    if (this.isEnabled) {
      this.disable()
    } else {
      this.enable()
    }
    return this.isEnabled
  }

  public getEnabled(): boolean {
    return this.isEnabled
  }

  public setProgress(progress: number): void {
    this.progress = progress
    if (!this.isEnabled || !this.ctx) return

    // Filter opens more with progress
    this.targetFilterFreq = 150 + progress * 2500

    // More noise with progress
    if (this.noiseGain) {
      const noiseLevel = 0.02 + progress * 0.12
      this.noiseGain.gain.setTargetAtTime(noiseLevel, this.ctx.currentTime, 0.1)
    }

    // More crackle with progress
    if (this.crackleGain) {
      const crackleLevel = 0.1 + progress * 0.4
      this.crackleGain.gain.setTargetAtTime(crackleLevel, this.ctx.currentTime, 0.1)
    }

    // Randomize crackle playback rate for variation
    if (this.crackleSource && Math.random() < 0.02) {
      this.crackleSource.playbackRate.setTargetAtTime(
        0.6 + Math.random() * 0.8 + progress * 0.5,
        this.ctx.currentTime,
        0.3
      )
    }

    // Sub frequencies drift with progress
    if (this.subOsc && this.subOsc2) {
      const drift = Math.sin(this.ctx.currentTime * 0.1) * progress * 3
      this.subOsc.frequency.setTargetAtTime(36 + drift + progress * 8, this.ctx.currentTime, 0.2)
      this.subOsc2.frequency.setTargetAtTime(40 + drift * 0.7 + progress * 6, this.ctx.currentTime, 0.2)
    }

    // Sub gain increases with progress
    if (this.subGain) {
      const subLevel = 0.1 + progress * 0.15
      this.subGain.gain.setTargetAtTime(subLevel, this.ctx.currentTime, 0.1)
    }
  }

  public update(): void {
    if (!this.isEnabled || !this.filter || !this.ctx) return

    // Smooth filter with slight random modulation
    const randomMod = (Math.random() - 0.5) * this.progress * 200
    this.currentFilterFreq += (this.targetFilterFreq - this.currentFilterFreq) * 0.05
    this.filter.frequency.setTargetAtTime(
      this.currentFilterFreq + randomMod,
      this.ctx.currentTime,
      0.05
    )
  }

  public dispose(): void {
    if (this.subOsc) { this.subOsc.stop(); this.subOsc.disconnect() }
    if (this.subOsc2) { this.subOsc2.stop(); this.subOsc2.disconnect() }
    if (this.noiseSource) { try { this.noiseSource.stop() } catch {} this.noiseSource.disconnect() }
    if (this.crackleSource) { try { this.crackleSource.stop() } catch {} this.crackleSource.disconnect() }
    if (this.ctx) { this.ctx.close() }
  }
}
