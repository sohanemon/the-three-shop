import { Canvas as FiberCanvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Backdrop from './backdrop';
import Shirt from './shirt';
import Camera from './camera';

export default function Canvas() {
  return (
    <FiberCanvas>
      <ambientLight>
        <Environment>
          {/* <Camera> */}
          {/* <Backdrop /> */}
          <Center>
            <Shirt />
          </Center>
          {/* </Camera> */}
        </Environment>
      </ambientLight>
    </FiberCanvas>
  );
}
