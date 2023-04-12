import { useSelector } from 'react-redux';
import Button from './button';
import { color } from '@/slices/editor-slice';
import { useRef } from 'react';

export default function AiPicker() {
  const c = useSelector(color);
  const inputRef = useRef<HTMLInputElement>(null);
  async function handleSubmit() {
    const input = inputRef.current?.value;
    fetch('/api/v1/image')
      .then((res) => res.json())
      .then((url) => console.log(url));
  }
  return (
    <div className='flex flex-col gap-y-2 '>
      <p className='-mb-1'>Write a prompt</p>
      <input
        ref={inputRef}
        className='h-10 pl-3 rounded-lg'
        placeholder='ex: red stripe'
        style={{ borderColor: c, outlineColor: c }}
      />
      <Button onClick={handleSubmit} customStyle='text-sm' type='fill'>
        Submit
      </Button>
    </div>
  );
}
