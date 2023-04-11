import { color } from '@/slices/editor-slice';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function Button({
  children,
  type,
  customStyle,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: 'fill' | 'outline';
  customStyle?: string;
}) {
  const c = useSelector(color);
  function applyVariant(type: 'fill' | 'outline') {
    if (type === 'fill') {
      return 'bg-secondary text-white hover:bg-secondary/90';
    } else return 'bg-base text-secondary border-2 border-current';
  }

  return (
    <motion.button
      style={{ backgroundColor: type === 'fill' ? c : '' }}
      onClick={onClick}
      className={`transition-all duration-300 px-4 py-2 rounded-md shadow-lg active:bg-secondary/70 ${applyVariant(
        type
      )} ${customStyle}`}
    >
      {children}
    </motion.button>
  );
}
