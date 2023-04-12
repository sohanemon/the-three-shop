import {
  color,
  selectImageURL,
  selectLogo,
  textureImg,
} from '@/slices/editor-slice';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ColorRepresentation, Mesh } from 'three';

export default function Shirt() {
  const c = useSelector(color);
  const t = useSelector(textureImg);
  const imageURL = useSelector(selectImageURL);
  const logo = useSelector(selectLogo);

  // @ts-ignore
  const { nodes, materials } = useGLTF('/shirt.glb');
  const reactTexture = useTexture(t);
  const shirtRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    easing.dampC(
      materials.lambert1.color,
      c as ColorRepresentation,
      0.25,
      delta
    );
  });

  // useEffect(() => {
  //   easing.dampC(
  //     materials.lambert1.color,
  //     c as ColorRepresentation,
  //     0.25,
  //     0.01
  //   );
  // }, [c, materials.lambert1.color]);

  return (
    <mesh
      ref={shirtRef}
      material={materials.lambert1}
      geometry={nodes.T_Shirt_male.geometry}
    >
      {(logo.centerLogo || logo.sideLogo) && (
        <Decal
          map={reactTexture}
          position={logo.centerLogo ? [0, 0.02, 0.1] : [0.05, 0.05, 0.1]}
          scale={logo.centerLogo ? [0.14, 0.14, 1] : [0.07, 0.07, 1]}
          dispose={null!}
        />
      )}
      {}
    </mesh>
  );
}
//  side logo props
// [0.05, 0.05, 0.1]; pos
// [0.07, 0.07, 1]; sca
