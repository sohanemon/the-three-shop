'use client';
import { RootState } from '@/store';
import { Inter } from 'next/font/google';
import { useSelector } from 'react-redux';
import Editor from './editor';
import Hero from './hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const firstPage = useSelector((state: RootState) => state.intro.firstPage);

  return (
    <main className='px-4'>
      <Hero />
      <Editor />
    </main>
  );
}
