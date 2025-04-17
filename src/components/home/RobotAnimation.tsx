
import React from 'react';
import { motion } from 'framer-motion';

const RobotAnimation = () => {
  return (
    <motion.div 
      className="relative w-64 h-64"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(155,135,245,0.2) 0%, rgba(155,135,245,0) 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div className="w-full h-full relative">
        {/* Robot Head */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-[#9b87f5] to-[#7E69AB] rounded-2xl"
          animate={{
            rotateZ: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Robot Eyes */}
          <div className="absolute top-8 left-6 w-6 h-6 bg-white rounded-full shadow-inner animate-pulse" />
          <div className="absolute top-8 right-6 w-6 h-6 bg-white rounded-full shadow-inner animate-pulse" />
          {/* Robot Antenna */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-8 bg-[#9b87f5]">
            <div className="absolute -top-2 -left-1 w-4 h-4 bg-[#7E69AB] rounded-full animate-pulse" />
          </div>
        </motion.div>
        {/* Robot Body */}
        <motion.div 
          className="absolute top-28 left-1/2 -translate-x-1/2 w-40 h-48 bg-gradient-to-b from-[#9b87f5] to-[#7E69AB] rounded-2xl"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Robot Core */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/20 rounded-full shadow-inner animate-pulse" />
          {/* Robot Arms */}
          <motion.div 
            className="absolute -left-8 top-8 w-8 h-24 bg-[#9b87f5] rounded-lg origin-top"
            animate={{
              rotateZ: [-15, 15, -15],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -right-8 top-8 w-8 h-24 bg-[#9b87f5] rounded-lg origin-top"
            animate={{
              rotateZ: [15, -15, 15],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RobotAnimation;
