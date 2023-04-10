import { Canvas as FiberCanvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Backdrop from './backdrop';
import Shirt from './shirt';
import Camera from './camera';

export default function Canvas() {
  return (
    <FiberCanvas style={{ height: '400px' }}>
      <ambientLight>
        <Camera>
          {/* <Backdrop /> */}
          {/* @ts-ignore */}
          <Center>
            <mesh scale={[10, 10, 10]}>
              <Shirt />
            </mesh>
          </Center>
        </Camera>
      </ambientLight>
    </FiberCanvas>
  );
}
