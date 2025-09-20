
"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Cube = ({ position, size, color }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.5;
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
};

const ThreeDBackground = () => {
  const cubes = useMemo(() => {
    const temp = [];
    const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 0.7 + 0.2;
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      temp.push({ id: i, position, size, color });
    }
    return temp;
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {cubes.map(cube => (
        <Cube key={cube.id} {...cube} />
      ))}
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ThreeDBackground;
