import { StaticImageData } from 'next/image';

export default function Tab({
  name,
  icon,
}: {
  name: string;
  icon: StaticImageData;
}) {
  return <div>{name}</div>;
}
