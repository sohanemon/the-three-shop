'use client';
import { Inter } from 'next/font/google';
import Hero from './hero';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Editor from './editor';
import { AnimatePresence, motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const firstPage = useSelector((state: RootState) => state.intro.firstPage);

  return (
    <main className='px-4'>
      <AnimatePresence>{firstPage ? <Hero /> : <Editor />}</AnimatePresence>
    </main>
  );
}
