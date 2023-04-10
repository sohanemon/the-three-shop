import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Shirt() {
  // @ts-ignore
  const { nodes, materials } = useGLTF('/shirt.glb');
  const reactTexture = useTexture('/react.png');
  const shirtRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, '#f00', 0.25, delta);
  });
  return (
    <mesh
      ref={shirtRef}
      material={materials.lambert1}
      geometry={nodes.T_Shirt_male.geometry}
    >
      <Decal
        map={reactTexture}
        position={[0.05, 0.05, 0.1]}
        scale={[0.07, 0.07, 1]}
        dispose={null!}
      />
    </mesh>
  );
}
