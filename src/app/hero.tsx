'use client';
import { slideAnimation } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='hero'>
      <motion.h1 className='text-7xl font-bold' {...slideAnimation('left')}>
        Lets <span>make</span>
      </motion.h1>
    </section>
  );
}
