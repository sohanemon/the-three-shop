import { fadeAnimation } from '@/lib/motion';
import { Decal, useDetectGPU, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { easing } from 'maath';

export default function Shirt() {
  const {} = useGLTF('/shirt.glb');
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, sunt. Quae
      praesentium repellat ut possimus asperiores neque unde aspernatur deleniti
      iure modi aliquid eos, quia, aperiam, quos beatae reiciendis atque!
    </div>
  );
}
