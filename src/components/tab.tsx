import Image, { StaticImageData } from 'next/image';

export default function Tab({
  filter,
  name,
  icon,
}: {
  filter?: boolean;
  name: string;
  icon: StaticImageData;
}) {
  return (
    <div>
      <Image src={icon} alt='picker' width={30} />
    </div>
  );
}
