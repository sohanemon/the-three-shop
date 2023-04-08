import { EditorTabs } from '@/utils/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Tab from './tab';

export default function LeftSideTab() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { delay: 1.1 } }}
      >
        {EditorTabs?.map((tab) => (
          <Tab key={tab.name} {...tab} />
        ))}
      </motion.section>
    </AnimatePresence>
  );
}
