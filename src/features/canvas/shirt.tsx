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
    if (shirtRef.current) {
      // console.log('🛑 ~ useFrame ~ current:', shirtRef.current);
      // shirtRef.current.rotation.x = state.mouse.y * Math.PI;
      // shirtRef.current.rotation.y = state.mouse.x * Math.PI;
    }
  });
  return (
    <mesh ref={shirtRef}>
      <primitive object={shirt} />
    </mesh>
  );
}
