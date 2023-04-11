import {
  selectLogo,
  setCurrentTab,
  toggleCenterLogo,
  toggleSideLogo,
} from '@/slices/editor-slice';
import { FilterTabs } from '@/utils/constants';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const logo = useSelector(selectLogo);
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    FilterTabs.map((filter) => {
      // @ts-ignore
      if (logo[name]) {
        setIsOn(true);
      } else setIsOn(false);
    });
  }, [logo, name]);

  function handleClick() {
    if (filter) {
      name === 'centerLogo'
        ? dispatch(toggleCenterLogo())
        : dispatch(toggleSideLogo());
    } else dispatch(setCurrentTab(name));
  }

  return (
    <div
      onClick={handleClick}
      className={filter ? `${isOn && 'bg-primary/20 '} rounded-full p-2` : ''}
    >
      <Image src={icon} alt='picker' width={30} />
    </div>
  );
}
