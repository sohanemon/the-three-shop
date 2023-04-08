'use client';
import Button from '@/components/button';
import { slideAnimation } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section className='hero' {...slideAnimation('left')}>
      <h1 className='text-7xl font-bold'>
        Lets <span className='text-secondary'>make</span>
      </h1>
      <p className='text-xl'>
        Your awesome t-shirt for <span className=''>free</span> right now{' '}
        <br className='md:hidden' /> and{' '}
        <strong className='capitalize'>unleash you imagination</strong> with our
        awesome tool.
      </p>
      <br />
      <Button onClick={() => console.log('ok')} type='fill'>
        Get Started
      </Button>
    </motion.section>
  );
}
