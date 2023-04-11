'use client';
import { slideAnimation } from '@/lib/motion';
import { color } from '@/slices/editor-slice';
import { toggleIntro } from '@/slices/intro-slice';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const dispatch = useDispatch();
  const c = useSelector(color);
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => dispatch(toggleIntro())}
        key={'navbar'}
        {...slideAnimation('down')}
      >
        <div className='cursor-pointer text-3xl flex items-center justify-center mt-3 gap-2'>
          {/* nav parent */}
          <motion.div {...slideAnimation('left')} className='pt-2'>
            <Image src='/shirt.png' alt='Icon' width={50} height={50} />
          </motion.div>
          <motion.h1 {...slideAnimation('right')}>
            The{' '}
            <span
              className='font-extrabold text-5xl inline-block rotate-12 '
              style={{ color: c }}
            >
              3
            </span>{' '}
            Shop
          </motion.h1>
        </div>
      </motion.div>
      ;
    </AnimatePresence>
  );
}
