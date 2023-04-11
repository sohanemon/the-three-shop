'use client';
import { setCurrentTab } from '@/slices/editor-slice';
import { RootState } from '@/store';
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import Editor from './editor';
import Hero from './hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const dispatch = useDispatch();
  const firstPage = useSelector((state: RootState) => state.intro.firstPage);

  return (
    // #note currentTab is '' because to close the tab container by clicking anywhere outside tab
    <main className='px-4' onClick={() => dispatch(setCurrentTab(''))}>
      <Hero />
      <Editor />
    </main>
  );
}
