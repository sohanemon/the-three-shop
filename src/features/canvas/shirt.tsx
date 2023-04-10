import { fadeAnimation } from '@/lib/motion';
import { Decal, useDetectGPU, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { easing } from 'maath';

export default function Shirt() {
  const { scene: shirt } = useGLTF('/shirt.glb');
  return <primitive object={shirt} />;
}
