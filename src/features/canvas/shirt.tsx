import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Shirt() {
  // @ts-ignore
  const { nodes, materials } = useGLTF('/shirt.glb');
  const reactTexture = useTexture('/react.png');
  const shirtRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    // shirt.scene.traverse((child) => {
    //   // @ts-ignore
    //   if (child.material) {
    //     // @ts-ignore
    //     child.material.color.setHex(0xff0000);
    //   }
    // });
  });
  return (
    <mesh material={materials.lambert1} geometry={nodes.T_Shirt_male.geometry}>
      {/* <primitive object={shirt}></primitive> */}
    </mesh>
  );
}
