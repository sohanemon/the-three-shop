import { Canvas as FiberCanvas } from '@react-three/fiber';
import { Environment, Center, PerspectiveCamera } from '@react-three/drei';

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
            <Shirt />
          </Center>
        </Camera>
      </ambientLight>
    </FiberCanvas>
  );
}
