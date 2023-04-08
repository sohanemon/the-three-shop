'use client';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  return (
    <AnimatePresence>
      <motion.div>
        <h1 className='text-3xl'>The Three Shop</h1>
      </motion.div>
      ;
    </AnimatePresence>
  );
}
