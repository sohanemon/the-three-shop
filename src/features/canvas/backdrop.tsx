import { RandomizedLight, AccumulativeShadows } from '@react-three/drei';

export default function Backdrop() {
  return (
    <AccumulativeShadows
      position={[0, 0, -0.1]}
      frames={60}
      alphaTest={0.85}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        intensity={1}
        radius={9}
        amount={4}
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>
  );
}
