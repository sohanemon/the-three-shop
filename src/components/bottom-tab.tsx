import { FilterTabs } from '@/utils/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Tab from './tab';

export default function BottomTab() {
  return (
    <AnimatePresence>
      <motion.section
        className='bottom-0 w-full flex justify-center absolute'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      >
        {FilterTabs?.map((tab) => (
          <Tab key={tab.name} {...tab} />
        ))}
      </motion.section>
    </AnimatePresence>
  );
}
