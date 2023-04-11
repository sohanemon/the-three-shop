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
          className='hero'
          {...slideAnimation('left')}
        >
          <h1 className='text-7xl font-bold'>
            Lets <span style={{ color: c }}>make</span>
          </h1>
          <p className='text-xl'>
            Your awesome t-shirt for <span className=''>free</span> right now{' '}
            <br className='md:hidden' /> and{' '}
            <strong className='capitalize'>unleash you imagination</strong> with
            our awesome tool.
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
