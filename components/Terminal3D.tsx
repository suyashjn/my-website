"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import TerminalBody from "@/components/terminal/TerminalBody";

// Must match the aspect-[4/3] wrapper in Hero.tsx so the 3D card matches StaticTerminal's shape.
const SCREEN_PX = { width: 560, height: 420 };
// world size = clientSize * (distanceFactor / 400)
const DISTANCE_FACTOR = 2.52;

const MAX_ROTATION = THREE.MathUtils.degToRad(30);

function Terminal() {
  const groupRef = useRef<THREE.Group>(null);
  const parallax = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    const { pointer, clock } = state;
    parallax.current.x += (pointer.y * 0.35 - parallax.current.x) * 0.06;
    parallax.current.y += (pointer.x * -0.35 - parallax.current.y) * 0.06;

    const idleSwing = Math.sin(clock.elapsedTime * 0.25) * 0.12;

    group.rotation.x = THREE.MathUtils.clamp(
      parallax.current.x,
      -MAX_ROTATION,
      MAX_ROTATION
    );
    group.rotation.y = THREE.MathUtils.clamp(
      idleSwing + parallax.current.y,
      -MAX_ROTATION,
      MAX_ROTATION
    );
    group.rotation.z = THREE.MathUtils.clamp(
      parallax.current.y * 0.25,
      -MAX_ROTATION,
      MAX_ROTATION
    );
  });

  return (
    <Float speed={1.1} rotationIntensity={0} floatIntensity={0.35}>
      <group ref={groupRef} scale={0.92}>
        <Html
          transform
          center
          occlude={false}
          pointerEvents="none"
          distanceFactor={DISTANCE_FACTOR}
        >
          <div style={{ width: SCREEN_PX.width, height: SCREEN_PX.height }}>
            <TerminalBody />
          </div>
        </Html>
      </group>
    </Float>
  );
}

export default function Terminal3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <Terminal />
      </Suspense>
    </Canvas>
  );
}
