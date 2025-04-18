
import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal = ({ children, direction = 'up' }: ScrollRevealProps) => {
  const { scrollYProgress } = useScroll();

  const getInitialDirection = () => {
    switch (direction) {
      case 'up': return 50;
      case 'down': return -50;
      case 'left': return 50;
      case 'right': return -50;
      default: return 0;
    }
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [getInitialDirection(), 0]
  );

  const x = direction === 'left' || direction === 'right'
    ? useTransform(scrollYProgress, [0, 1], [getInitialDirection(), 0])
    : useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6 }}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
