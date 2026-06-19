"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function useGearGeometry({ teeth = 18, outer = 1.5, inner = 0.55, depth = 0.5 }) {
  return useMemo(() => {
    const shape = new THREE.Shape();
    const toothDepth = outer * 0.16;
    const root = outer - toothDepth;
    const steps = teeth * 2;
    for (let i = 0; i <= steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      const r = i % 2 === 0 ? outer : root;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
    }
    const hole = new THREE.Path();
    hole.absarc(0, 0, inner, 0, Math.PI * 2, true);
    shape.holes.push(hole);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.06,
      bevelSegments: 4,
      curveSegments: 24,
    });
    geo.center();
    return geo;
  }, [teeth, outer, inner, depth]);
}

function Gear({ position, scale = 1, speed = 0.3, teeth, color, reverse = false, roughness = 0.25 }) {
  const ref = useRef();
  const geo = useGearGeometry({ teeth, outer: 1.5 });
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed * (reverse ? -1 : 1);
  });
  return (
    <mesh ref={ref} geometry={geo} position={position} scale={scale}>
      <meshStandardMaterial color={color} metalness={1} roughness={roughness} envMapIntensity={1.5} />
    </mesh>
  );
}

function LinerStack() {
  const ref = useRef();
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.22;
  });
  return (
    <group ref={ref}>
      {[0.9, 0.55, 0.2, -0.15].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.62, 0.07 - i * 0.006, 24, 80]} />
          <meshStandardMaterial
            color={i === 1 ? "#c79a2b" : "#8ea1bd"}
            metalness={1}
            roughness={i === 1 ? 0.28 : 0.15}
            envMapIntensity={1.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function Rig() {
  const group = useRef();
  useFrame((state) => {
    const { x, y } = state.pointer;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.4, 0.04);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.3, 0.04);
    }
  });
  return (
    <group ref={group} scale={1.12}>
      <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.6}>
        <group rotation={[Math.PI / 2.6, 0, 0]}>
          <LinerStack />
          <Gear position={[1.9, -0.2, -0.3]} scale={0.5} teeth={14} speed={0.5} color="#7f93b4" roughness={0.18} />
          <Gear position={[-2.0, 0.6, -0.6]} scale={0.34} teeth={12} speed={0.7} reverse color="#1b5fd9" roughness={0.3} />
          <Gear position={[1.3, 1.5, -1.1]} scale={0.26} teeth={10} speed={0.9} color="#c79a2b" roughness={0.25} />
        </group>
      </Float>
      <Sparkles count={50} scale={[9, 6, 6]} size={2} speed={0.25} color="#1b5fd9" opacity={0.4} />
    </group>
  );
}

export default function EngineScene() {
  return (
    <Canvas dpr={[1, 1.8]} camera={{ position: [0, 0, 7], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.9} />
      <spotLight position={[6, 8, 6]} intensity={2.4} angle={0.5} penumbra={0.8} color="#ffffff" />
      <pointLight position={[-6, -2, -4]} intensity={1.6} color="#7aa6ff" />
      <pointLight position={[4, -4, 4]} intensity={1.2} color="#e7c463" />
      <Rig />
      <Environment preset="city" />
    </Canvas>
  );
}
