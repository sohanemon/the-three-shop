import { setCurrentTab } from '@/slices/editor-slice';
import Image, { StaticImageData } from 'next/image';
import { useDispatch } from 'react-redux';

export default function Tab({
  filter,
  name,
  icon,
}: {
  filter?: boolean;
  name: string;
  icon: StaticImageData;
}) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setCurrentTab(name))}
      className={filter ? 'bg-primary/20 rounded-full p-2' : ''}
    >
      <Image src={icon} alt='picker' width={30} />
    </div>
  );
}
