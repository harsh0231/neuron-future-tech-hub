
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type TechIconProps = {
  icon: ReactNode;
  label: string;
  color: string;
  delay?: number;
};

const TechIcon = ({ icon, label, color, delay = 0 }: TechIconProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: delay * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.div 
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ${color}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.div>
      <span className="text-xs text-gray-300 font-medium">{label}</span>
    </motion.div>
  );
};

export default TechIcon;
