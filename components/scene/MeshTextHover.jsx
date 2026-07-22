"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * MeshTextHover — OriginKit-style WebGL text with pointer-driven liquid
 * distortion + chromatic aberration. The text is drawn to a high-DPR canvas
 * texture and mapped onto a plane; a fragment shader ripples and RGB-splits the
 * sampled texels around the cursor, easing back when the pointer leaves.
 *
 * A hidden DOM heading (same classes) reserves layout and carries the real,
 * accessible/SEO text — the canvas is purely decorative.
 *
 * Props:
 *   lines:    [{ text, gradient?: boolean }]  — gradient = brand-blue fill
 *   as:       heading tag for the a11y node (default "h1")
 *   className: applied to the hidden heading (drives size/layout)
 */
const FRAG = /* glsl */ `
  precision highp float;
  uniform sampler2D uTex;
  uniform vec2  uMouse;   // 0..1 in plane space
  uniform float uHover;   // 0..1 eased
  uniform float uTime;
  varying vec2 vUv;

  void main(){
    vec2 uv = vUv;
    float d = distance(uv, uMouse);
    float infl = smoothstep(0.34, 0.0, d) * uHover;

    // ripple push away from the cursor + travelling wave
    vec2 dir = normalize(uv - uMouse + 1e-4);
    float wave = sin(d * 34.0 - uTime * 5.0) * 0.5 + 0.5;
    vec2 disp = dir * infl * (0.028 + 0.02 * wave);

    // chromatic aberration scaled by influence
    float ca = 0.014 * infl;
    float r = texture2D(uTex, uv - disp + dir * ca).a;
    float g = texture2D(uTex, uv - disp).a;
    float b = texture2D(uTex, uv - disp - dir * ca).a;

    vec4 base = texture2D(uTex, uv - disp);
    // base.rgb already holds the (possibly gradient) fill colour; modulate the
    // channels slightly by the split so the aberration reads as colour fringing
    vec3 col = base.rgb;
    float alpha = max(max(r, g), b);
    col += vec3(r - g, 0.0, b - g) * 0.6 * infl;

    gl_FragColor = vec4(col, alpha * base.a / max(g, 0.0001));
    if (alpha < 0.01) discard;
  }
`;

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

export default function MeshTextHover({ lines = [], as = "h1", className = "" }) {
  const wrapRef = useRef(null);
  const domRef = useRef(null);
  const hostRef = useRef(null);
  const Tag = as;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const wrap = wrapRef.current, dom = domRef.current, host = hostRef.current;
    if (!wrap || !dom || !host) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 10);
    camera.position.z = 1;

    const tex = new THREE.CanvasTexture(document.createElement("canvas"));
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const uniforms = {
      uTex: { value: tex },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uTime: { value: 0 },
    };
    const geo = new THREE.PlaneGeometry(1, 1);
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms, transparent: true });
    scene.add(new THREE.Mesh(geo, mat));

    // Draw the DOM text onto the texture canvas at the heading's exact box. With
    // the heading forced nowrap + inline-block and the font-size capped to fit
    // its column, that box always equals the single-line text — so the buffer
    // aspect matches the host (no distortion) and nothing is clipped. Letter-
    // spacing is mirrored so the drawn width matches the DOM precisely.
    const paint = () => {
      const cs = getComputedStyle(dom);
      const rect = dom.getBoundingClientRect();
      const w = Math.max(2, Math.ceil(rect.width));
      const h = Math.max(2, Math.ceil(rect.height));
      const fontPx = parseFloat(cs.fontSize);
      const lineH = parseFloat(cs.lineHeight) || fontPx * 1.05;
      const spacing = cs.letterSpacing && cs.letterSpacing !== "normal" ? cs.letterSpacing : "0px";

      const cvs = tex.image;
      const ctx = cvs.getContext("2d");
      const dpr = Math.min(window.devicePixelRatio, 2);
      cvs.width = Math.round(w * dpr);
      cvs.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${fontPx}px ${cs.fontFamily}`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      if ("letterSpacing" in ctx) ctx.letterSpacing = spacing;

      lines.forEach((ln, i) => {
        const y = lineH * (i + 0.5);
        if (ln.gradient) {
          const g = ctx.createLinearGradient(0, 0, w, 0);
          g.addColorStop(0, "#1b5fd9");
          g.addColorStop(1, "#0b3aa0");
          ctx.fillStyle = g;
        } else {
          ctx.fillStyle = "#0b1b33";
        }
        ctx.fillText(ln.text, 0, y);
      });

      tex.needsUpdate = true;
      renderer.setSize(w, h, false);
    };

    // fonts may load after first paint — repaint when ready
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(paint);
    paint();

    const ro = new ResizeObserver(paint);
    ro.observe(dom);

    let hoverTarget = 0;
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      uniforms.uMouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1 - (e.clientY - rect.top) / rect.height
      );
      hoverTarget = 1;
    };
    const onLeave = () => (hoverTarget = 0);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    let raf, t0 = performance.now();
    const loop = () => {
      const now = performance.now();
      uniforms.uTime.value += (now - t0) / 1000;
      t0 = now;
      uniforms.uHover.value += ((reduce ? 0 : hoverTarget) - uniforms.uHover.value) * 0.08;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      geo.dispose(); mat.dispose(); tex.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, [lines]);

  return (
    <div ref={wrapRef} className="mesh-host relative inline-block max-w-full align-top">
      {/* hidden but present: reserves layout + carries accessible/SEO text.
          nowrap keeps each line single-line so its box matches the drawn text. */}
      <Tag ref={domRef} className={className} style={{ opacity: 0, margin: 0, whiteSpace: "nowrap" }}>
        {lines.map((l, i) => (
          <span key={i} className="clip-line">{l.text}</span>
        ))}
      </Tag>
      <div ref={hostRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
    </div>
  );
}
