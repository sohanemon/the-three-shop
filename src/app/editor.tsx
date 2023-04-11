import { RootState } from '@/store';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { slideAnimation } from '@/lib/motion';
import LeftSideTab from '@/components/left-side-tab';
import BottomTab from '@/components/bottom-tab';
import Canvas from '@/features/canvas';
export default function Editor() {
  const firstPage = useSelector((state: RootState) => state.intro.firstPage);

  return (
    <AnimatePresence>
      {!firstPage && (
        <motion.section
          className='relative min-h-[80vh]'
          key={'editor'}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          }}
        >
          <LeftSideTab />
          <Canvas />
          <BottomTab />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
