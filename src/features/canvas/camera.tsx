import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import { Group } from 'three';

export default function Camera({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5]);
    easing.dampE(
      groupRef?.current?.rotation!,
      [state.pointer.x / 10, -state.pointer.y / 5, 0],
      0.25,
      delta
    );
  });
  return (
    <>
      <perspectiveCamera position={[0, 0, 4.5]}>
        <group ref={groupRef}>{children}</group>
      </perspectiveCamera>
    </>
  );
}
