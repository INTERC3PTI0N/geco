"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive WebGL wallpaper — a flowing "liquid steel / machined isoline" field
 * in the GECO brand palette (white base, brand blue, accent gold). Domain-warped
 * fractal noise draws precision contour lines that drift and bend toward the
 * pointer, evoking brushed metal and engineering blueprints. Kept low-contrast so
 * foreground text stays crisp in light mode.
 *
 * Raw Three.js on a single fullscreen quad — cheaper and simpler than an R3F tree
 * for a fixed background layer.
 */
const FRAG = /* glsl */ `
  precision highp float;
  uniform vec2  uRes;
  uniform float uTime;
  uniform vec2  uMouse;      // 0..1
  uniform float uMouseAmt;   // eased pointer presence

  // --- iq simplex-ish value noise ---
  vec2 hash(vec2 p){
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(vec2 p){
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for(int i = 0; i < 4; i++){ v += a * noise(p); p *= 2.02; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = gl_FragCoord.xy / uRes.xy;
    vec2 p = (gl_FragCoord.xy - 0.5 * uRes.xy) / uRes.y; // aspect-correct

    float t = uTime * 0.018;

    // pointer lens — pull the field gently toward the cursor
    vec2 m = (uMouse - 0.5) * vec2(uRes.x / uRes.y, 1.0);
    float md = length(p - m);
    vec2 pull = normalize(p - m + 1e-4) * (-0.09) * uMouseAmt * exp(-md * 2.2);

    // domain warp for that liquid-metal flow
    vec2 q = p * 1.6 + pull;
    vec2 warp = vec2(fbm(q + vec2(0.0, t)), fbm(q + vec2(5.2, -t)));
    float field = fbm(q + warp * 1.4 + vec2(t * 0.6, 0.0));

    // machined isolines — thin precise contour bands (sparser, calmer)
    float lines = abs(fract(field * 3.0 + t * 1.2) - 0.5);
    float iso = smoothstep(0.05, 0.0, lines) * 0.7;

    // base white, cool blueprint tint in the troughs
    vec3 white = vec3(1.0);
    vec3 blue  = vec3(0.106, 0.373, 0.851);   // --blue #1b5fd9
    vec3 gold  = vec3(0.780, 0.604, 0.169);   // --gold #c79a2b

    float shade = smoothstep(-0.6, 0.8, field);
    vec3 col = mix(white, mix(white, blue, 0.12), 1.0 - shade);

    // isolines: mostly blue, gold where the field peaks (rare, precious accents)
    vec3 lineCol = mix(blue, gold, smoothstep(0.35, 0.75, field));
    col = mix(col, lineCol, iso * 0.5);

    // pointer glow — a faint warm-cool bloom
    col = mix(col, blue, exp(-md * 3.4) * 0.10 * uMouseAmt);

    // vignette to keep edges clean and content legible
    float vig = smoothstep(1.25, 0.25, length(uv - 0.5));
    col = mix(white, col, 0.46 + 0.4 * vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

const VERT = /* glsl */ `
  void main(){ gl_Position = vec4(position, 1.0); }
`;

export default function Wallpaper({ className = "" }) {
  const hostRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseAmt: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

    const resize = () => {
      const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
      renderer.setSize(w, h);
      renderer.domElement.style.display = "block";
      uniforms.uRes.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    // pointer target (relative to this panel) with easing for a heavy, precise pull
    const target = new THREE.Vector2(0.5, 0.5);
    let amtTarget = 0;
    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      target.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
      amtTarget = 1;
    };
    const onLeave = () => (amtTarget = 0);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    let raf, t0 = performance.now();
    const loop = () => {
      const now = performance.now();
      uniforms.uTime.value += reduce ? 0 : (now - t0) / 1000;
      t0 = now;
      uniforms.uMouse.value.lerp(target, 0.06);
      uniforms.uMouseAmt.value += (amtTarget - uniforms.uMouseAmt.value) * 0.05;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      mat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={hostRef} className={`absolute inset-0 ${className}`} aria-hidden="true" />;
}
