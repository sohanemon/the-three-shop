import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Shirt() {
  // @ts-ignore
  const { nodes, materials } = useGLTF('/shirt.glb');
  const reactTexture = useTexture('/react.png');
  const shirtRef = useRef<Mesh>(null);
  useFrame((state, delta) => {});
  return (
    <mesh
      ref={shirtRef}
      material={materials.lambert1}
      geometry={nodes.T_Shirt_male.geometry}
    >
      <Decal map={reactTexture} scale={[0.08, 0.08, 1]} dispose={null!} />
    </mesh>
  );
}
