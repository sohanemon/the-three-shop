import {
  color,
  selectImageURL,
  selectLogo,
  textureImg,
} from '@/slices/editor-slice';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { easing } from 'maath';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ColorRepresentation, ImageLoader, Mesh, TextureLoader } from 'three';

export default function Shirt() {
  const c = useSelector(color);
  const t = useSelector(textureImg);
  const imageURL = useSelector(selectImageURL);
  const logo = useSelector(selectLogo);
  console.log(imageURL, 'image url');
  // @ts-ignore
  const { nodes, materials } = useGLTF('/shirt.glb');
  // #todo useTexture(imageURL || t);
  // const reactTexture = useTexture(imageURL || t);
  // const logoTexture = useTexture(
  //   'https://oaidalleapiprodscus.blob.core.windows.net/private/org-5cINL02TgAA4fFJ9RkD7RYWb/user-cm88UeUgSwRdyl60PyfRUv8k/img-fMp1iC9kys3a3HxrV7HrzH9G.png?st=2023-04-12T09%3A16%3A33Z&se=2023-04-12T11%3A16%3A33Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-12T00%3A18%3A45Z&ske=2023-04-13T00%3A18%3A45Z&sks=b&skv=2021-08-06&sig=ZhnXo2hMTTaei1uy%2BVraLBa2ELKZ45Ha69SzSDtyISQ%3D'
  // );
  const logoTexture = useLoader(TextureLoader, imageURL || t);

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
          map={logoTexture}
          position={logo.centerLogo ? [0, 0.02, 0.1] : [0.05, 0.05, 0.1]}
          scale={logo.centerLogo ? [0.14, 0.14, 1] : [0.07, 0.07, 1]}
          dispose={null!}
        />
      )}
      {/* {imageURL && (
        <Decal
          map={logoTexture}
          position={logo.centerLogo ? [0, 0.02, 0.1] : [0.05, 0.05, 0.1]}
          scale={logo.centerLogo ? [0.14, 0.14, 1] : [0.07, 0.07, 1]}
          dispose={null!}
        />
      )} */}
    </mesh>
  );
}
//  side logo props
// [0.05, 0.05, 0.1]; pos
// [0.07, 0.07, 1]; sca
