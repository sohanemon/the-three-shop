import { swatch, fileIcon, ai, logoShirt, stylishShirt } from '@/assets';

export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: swatch,
  },
  {
    name: 'filepicker',
    icon: fileIcon,
  },
  // {
  //   name: 'aipicker',
  //   icon: ai,
  // },
];

export const FilterTabs = [
  {
    name: 'centerLogo',
    icon: logoShirt,
  },
  {
    name: 'sideLogo',
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
};
