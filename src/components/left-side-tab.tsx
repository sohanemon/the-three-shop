import { EditorTabs } from '@/utils/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Tab from './tab';
import ColorPicker from './colorpicker';
import FilePicker from './filepicker';
import AiPicker from './aipicker';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect } from 'react';

export default function LeftSideTab() {
  const currentTab = useSelector((state: RootState) => state.editor.currentTab);
  useEffect(() => {
    // generateTab(currentTab);
  }, [currentTab]);

  return (
    <>
      <motion.section
        onClick={(e) => e.stopPropagation()}
        initial={{ x: -100, opacity: 0 }}
        className='z-10 absolute left-0 top-1/3 flex flex-col gap-3 -translate-y-1/2 bg-primary/10 px-2 py-4 rounded-xl'
        animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
        exit={{ x: -100, opacity: 0, transition: { delay: 0 } }}
      >
        {EditorTabs?.map((tab) => (
          <Tab key={tab.name} {...tab} />
        ))}
        {currentTab && (
          <div className='rounded-xl absolute top-0 ml-3 left-full w-max p-8 h-max bg-primary/10'>
            {generateTab(currentTab)}
          </div>
        )}
      </motion.section>
    </>
  );
}

function generateTab(currentTab: string) {
  switch (currentTab) {
    case 'colorpicker':
      return <ColorPicker />;
    case 'filepicker':
      return <FilePicker />;
    case 'aipicker':
      return <AiPicker />;
    default:
      null;
  }
}
