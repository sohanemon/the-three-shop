'use client';
import Button from '@/components/button';
import { slideAnimation } from '@/lib/motion';
import { color } from '@/slices/editor-slice';
import { toggleIntro } from '@/slices/intro-slice';
import { RootState } from '@/store';
import { AnimatePresence, motion, usePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

export default function Hero() {
  const dispatch = useDispatch();
  const firstPage = useSelector((state: RootState) => state.intro.firstPage);
  const c = useSelector(color);

  return (
    <AnimatePresence>
      {firstPage && (
        <motion.section
          key={'intro'}
          className='hero max-w-2xl mx-auto'
          {...slideAnimation('left')}
        >
          <p className='text-xl'>
            Welcome to our t-shirt website! We&apos;re thrilled that
            <br className='hidden md:block' /> you&apos;ve decided to join us on
            our journey to <br />
            <span className='text-7xl font-bold capitalize'>
              create <span style={{ color: c }}>unique</span>
            </span>
            and <strong style={{ color: c }}> stylish t-shirts</strong> that
            help you <strong>express</strong> your individuality.
          </p>
          <br />
          <Button onClick={() => dispatch(toggleIntro())} type='fill'>
            Get Started
          </Button>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
