import { PerspectiveCamera } from '@react-three/drei';

export default function Camera({ children }: { children: React.ReactNode }) {
  return (
    <>
      <perspectiveCamera position={[0, 0, 4.5]}>{children}</perspectiveCamera>
    </>
  );
}
