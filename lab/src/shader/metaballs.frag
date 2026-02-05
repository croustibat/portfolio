precision highp float;

varying vec2 vUv;

// Uniforms
uniform float uTime;
uniform float uProgress;      // 0-1 scroll progress
uniform vec2 uResolution;
uniform vec3 uBlobPositions[12];  // xyz = x, y, radius
uniform float uBlobCount;
uniform float uPulseAmount;   // breathing intensity
uniform float uChaosAmount;   // collision chaos
uniform float uPatternAmount; // pattern formation

// Colors
const vec3 COLOR_BG = vec3(0.0);
const vec3 COLOR_GREEN_DEEP = vec3(0.02, 0.12, 0.06);
const vec3 COLOR_GREEN = vec3(0.04, 0.18, 0.1);
const vec3 COLOR_ACCENT = vec3(0.486, 0.227, 0.929); // #7C3AED

// Smooth minimum for metaball blending
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

// Simple noise
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// FBM noise
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }

  return value;
}

// Metaball field
float metaballField(vec2 uv) {
  float field = 0.0;

  for (int i = 0; i < 12; i++) {
    if (float(i) >= uBlobCount) break;

    vec2 blobPos = uBlobPositions[i].xy;
    float radius = uBlobPositions[i].z;

    // Add pulse (breathing)
    float pulse = 1.0 + uPulseAmount * 0.15 * sin(uTime * 2.0 + float(i) * 0.5);
    radius *= pulse;

    // Add chaos wobble
    if (uChaosAmount > 0.0) {
      float wobble = uChaosAmount * 0.03;
      blobPos.x += wobble * sin(uTime * 3.0 + float(i) * 1.7);
      blobPos.y += wobble * cos(uTime * 2.5 + float(i) * 2.3);
    }

    float dist = length(uv - blobPos);
    field += (radius * radius) / (dist * dist + 0.001);
  }

  return field;
}

void main() {
  // Aspect-corrected UV
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;
  uv = uv * 2.0 - vec2(aspect, 1.0); // Center at origin

  // Base metaball field
  float field = metaballField(uv);

  // Threshold for blob edges
  float threshold = 1.0;
  float edge = smoothstep(threshold - 0.3, threshold + 0.1, field);

  // Inner glow
  float innerGlow = smoothstep(threshold + 0.5, threshold + 2.0, field);

  // Pattern formation (spiral/membrane at high progress)
  float patternMask = 0.0;
  if (uPatternAmount > 0.0) {
    float angle = atan(uv.y, uv.x);
    float dist = length(uv);
    float spiral = sin(angle * 3.0 + dist * 8.0 - uTime * 0.5);
    patternMask = uPatternAmount * 0.3 * smoothstep(0.3, 0.8, spiral) * edge;
  }

  // Noise for organic texture
  float noiseVal = fbm(uv * 3.0 + uTime * 0.1);
  float organicNoise = noiseVal * 0.15 * edge;

  // Color composition
  vec3 color = COLOR_BG;

  // Deep green base for blobs
  color = mix(color, COLOR_GREEN_DEEP, edge * 0.8);

  // Lighter green for inner glow
  color = mix(color, COLOR_GREEN, innerGlow * 0.6);

  // Accent on edges (subtle violet)
  float edgeHighlight = smoothstep(threshold - 0.1, threshold + 0.05, field) -
                        smoothstep(threshold + 0.05, threshold + 0.3, field);
  color = mix(color, COLOR_ACCENT * 0.4, edgeHighlight * 0.5 * (0.3 + uProgress * 0.7));

  // Pattern accent
  color += COLOR_ACCENT * patternMask * 0.3;

  // Add organic noise variation
  color += organicNoise * vec3(0.1, 0.15, 0.08);

  // Vignette
  float vignette = 1.0 - smoothstep(0.5, 1.5, length(vUv - 0.5) * 1.5);
  color *= 0.7 + vignette * 0.3;

  // Very subtle background noise (always visible)
  float bgNoise = fbm(vUv * 50.0 + uTime * 0.05) * 0.02;
  color += bgNoise;

  // Final color grading - slight green tint
  color.g *= 1.05;

  gl_FragColor = vec4(color, 1.0);
}
