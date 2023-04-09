import { EditorTabs } from '@/utils/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Tab from './tab';

export default function LeftSideTab() {
  return (
    <>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        className='absolute left-0 top-1/3 flex flex-col gap-3 -translate-y-1/2 bg-primary/10 px-2 py-4 rounded-xl'
        animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
        exit={{ x: -100, opacity: 0, transition: { delay: 0 } }}
      >
        {EditorTabs?.map((tab) => (
          <Tab key={tab.name} {...tab} />
        ))}
      </motion.section>
    </>
  );
}
