import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import { Group } from 'three';

export default function Camera({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);
  // #todo rotator
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);
    easing.dampE(
      groupRef?.current?.rotation!,
      [-state.pointer.y / 7, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return (
    <>
      <perspectiveCamera position={[0, 0, 4.4]}>
        <group ref={groupRef}>{children}</group>
      </perspectiveCamera>
    </>
  );
}
