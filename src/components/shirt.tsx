import { fadeAnimation } from '@/lib/motion';
import { motion } from 'framer-motion';
export default function Shirt() {
  return (
    <motion.div {...fadeAnimation}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, sunt. Quae
      praesentium repellat ut possimus asperiores neque unde aspernatur deleniti
      iure modi aliquid eos, quia, aperiam, quos beatae reiciendis atque!
    </motion.div>
  );
}
