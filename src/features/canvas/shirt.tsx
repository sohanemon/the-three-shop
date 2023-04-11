import { color, textureImg } from '@/slices/editor-slice';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ColorRepresentation, Mesh } from 'three';

export default function Shirt() {
  const c = useSelector(color);
  const t = useSelector(textureImg);
  console.log('🛑 ~ Shirt ~ t:', t);

  // @ts-ignore
  const { nodes, materials } = useGLTF('/shirt.glb');
  const reactTexture = useTexture(t);
  const shirtRef = useRef<Mesh>(null);
  // #todo color changer
  useFrame((state, delta) => {
    easing.dampC(
      materials.lambert1.color,
      c as ColorRepresentation,
      0.25,
      delta
    );
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
