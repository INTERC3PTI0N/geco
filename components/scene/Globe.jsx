"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

/**
 * Interactive 3D Earth globe with a real equirectangular texture and 60
 * export-market pins. Pins are computed with the SAME lon/lat→xyz mapping that
 * three.js SphereGeometry uses for its UVs, and they live in the same rotating
 * group as the textured sphere — so every marker lands on its actual country.
 * Drag to spin, auto-rotates when idle.
 */

// 60 export destinations [lat, lon] — all on land
const COUNTRIES = [
  // Middle East
  [24, 54], [24, 45], [25, 51], [29, 47], [21, 57], [26, 50], [31, 36], [33, 35], [33, 44], [32, 53], [15, 48], [39, 35],
  // Africa
  [26, 30], [9, 8], [0, 37], [-29, 24], [32, -6], [28, 3], [34, 9], [9, 40], [8, -1], [-6, 35], [15, 30], [27, 17], [7, -5], [14, -14],
  // Asia Pacific
  [22, 79], [30, 70], [24, 90], [7, 81], [28, 84], [0, 114], [4, 102], [15, 101], [16, 106], [15, 121], [1, 104], [35, 103], [36, 138], [36, 128], [-25, 133], [-37, 175], [21, 96],
  // Europe
  [54, -2], [51, 10], [46, 2], [42, 12], [40, -4], [52, 5], [50, 4], [52, 19], [56, 38], [49, 32], [39, 22], [39, -8], [59, 15],
  // Latin America
  [-10, -52], [-34, -64], [-33, -70], [4, -73], [-10, -76], [23, -102],
  // North America
  [39, -98], [53, -113],
];

const R = 1;
function latLonToVec3(lat, lon, r = R) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

const ATMO_VERT = /* glsl */ `
  varying vec3 vN; varying vec3 vP;
  void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vP = mv.xyz; gl_Position = projectionMatrix * mv; }
`;
const ATMO_FRAG = /* glsl */ `
  varying vec3 vN; varying vec3 vP;
  void main(){
    vec3 view = normalize(-vP);
    float f = pow(1.0 - max(dot(vN, view), 0.0), 3.2);
    gl_FragColor = vec4(vec3(0.30, 0.55, 1.0) * f, f * 0.85);
  }
`;

function Pins() {
  const positions = useMemo(() => COUNTRIES.map(([la, lo]) => latLonToVec3(la, lo, R + 0.006)), []);
  return (
    <group>
      {positions.map((p, i) => (
        <group key={i} position={p}>
          {/* marker */}
          <mesh>
            <sphereGeometry args={[0.011, 10, 10]} />
            <meshBasicMaterial color={i % 6 === 0 ? "#ffd24a" : "#4de0ff"} toneMapped={false} />
          </mesh>
          {/* soft halo */}
          <mesh>
            <sphereGeometry args={[0.024, 10, 10]} />
            <meshBasicMaterial color={i % 6 === 0 ? "#ffd24a" : "#4de0ff"} transparent opacity={0.22} toneMapped={false} depthWrite={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Earth() {
  const map = useTexture("/brand/earth.jpg");
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  return (
    <mesh>
      <sphereGeometry args={[R, 96, 96]} />
      <meshStandardMaterial map={map} metalness={0.15} roughness={0.85} />
    </mesh>
  );
}

function GlobeRig() {
  const ref = useRef();
  return (
    <group ref={ref} rotation={[0.3, -0.6, 0.12]}>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <Pins />
      {/* atmosphere rim */}
      <mesh scale={1.16}>
        <sphereGeometry args={[R, 48, 48]} />
        <shaderMaterial vertexShader={ATMO_VERT} fragmentShader={ATMO_FRAG} transparent blending={THREE.AdditiveBlending} side={THREE.BackSide} depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function Globe() {
  return (
    <Canvas dpr={[1, 1.8]} camera={{ position: [0, 0, 3.05], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 2, 5]} intensity={2.1} color="#fff6e8" />
      <pointLight position={[-5, -2, -3]} intensity={0.6} color="#4d8dff" />
      <GlobeRig />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} rotateSpeed={0.5} minPolarAngle={0.5} maxPolarAngle={2.5} />
    </Canvas>
  );
}
