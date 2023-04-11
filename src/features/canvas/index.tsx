import { Center } from '@react-three/drei';
import { Canvas as FiberCanvas } from '@react-three/fiber';

import { currentTab } from '@/slices/editor-slice';
import Camera from './camera';
import { useSelector } from 'react-redux';
import Shirt from './shirt';

export default function Canvas() {
  const tab = useSelector(currentTab);
  return (
    <FiberCanvas
      shadows
      camera={{ position: [0, 0, 0] }}
      style={{
        height: '400px',
        width: '400px',
        margin: '0 auto',
        zIndex: tab && -1,
      }}
    >
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
