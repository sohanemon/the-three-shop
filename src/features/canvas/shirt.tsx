import { fadeAnimation } from '@/lib/motion';
import { Decal, useDetectGPU, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { easing } from 'maath';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Shirt() {
  const { scene: shirt } = useGLTF('/shirt.glb');
  const shirtRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    shirt.traverse((child) => {
      // @ts-ignore
      if (child.material) {
        // @ts-ignore
        child.material.color.setHex(0xff0000);
      }
    });
  });
  return (
    <mesh ref={shirtRef}>
      <primitive object={shirt}></primitive>
    </mesh>
  );
}
