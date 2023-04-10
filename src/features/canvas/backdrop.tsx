import { RandomizedLight, AccumulativeShadows } from '@react-three/drei';

export default function Backdrop() {
  return (
    <AccumulativeShadows
      position={[0, 0, -0.3]}
      frames={60}
      alphaTest={0.85}
      temporal
    >
      <RandomizedLight amount={1} position={[1, 1, -1]} />
    </AccumulativeShadows>
  );
}
