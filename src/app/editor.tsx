import { RootState } from '@/store';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { slideAnimation } from '@/lib/motion';
export default function Editor() {
  const firstPage = useSelector((state: RootState) => state.intro.firstPage);

  return (
    <AnimatePresence>
      {!firstPage && (
        <motion.section
          key={'editor'}
          initial={{ x: 700, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.75,
              duration: 0.5,
              type: 'spring',
              damping: 14,
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          repellat incidunt debitis perferendis porro velit dignissimos saepe
          quos et veniam, tempore deleniti praesentium error vel similique odio
          illum molestiae quam.
        </motion.section>
      )}
    </AnimatePresence>
  );
}
