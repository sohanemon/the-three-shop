import { motion } from 'framer-motion';

export default function Button({
  children,
  type,
  customStyle,
}: {
  children: React.ReactNode;
  type: 'fill' | 'outline';
  customStyle?: string;
}) {
  function applyVariant(type: 'fill' | 'outline') {
    if (type === 'fill') {
      return 'bg-secondary text-white hover:bg-secondary/90';
    } else return 'bg-base text-secondary border-2 border-current';
  }

  return (
    <motion.button
      className={`transition-all duration-300 px-4 py-2 rounded-md shadow-lg active:bg-secondary/70 ${applyVariant(
        type
      )} ${customStyle}`}
    >
      {children}
    </motion.button>
  );
}
