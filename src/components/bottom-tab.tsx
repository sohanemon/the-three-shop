import { selectLogo } from '@/slices/editor-slice';
import { FilterTabs } from '@/utils/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Tab from './tab';

export default function BottomTab() {
  const logo = useSelector(selectLogo);
  return (
    <AnimatePresence>
      <div className='flex justify-center'>
        <motion.section
          className='bottom-0  flex justify-center absolute gap-3 bg-primary/0 w-max mx-auto px-5 py-3 rounded-xl'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          {FilterTabs?.map((tab) => (
            <Tab filter key={tab.name} {...tab} />
          ))}
        </motion.section>
      </div>
    </AnimatePresence>
  );
}
