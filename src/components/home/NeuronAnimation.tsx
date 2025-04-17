
import React from 'react';
import { motion } from 'framer-motion';

const NeuronAnimation = () => {
  // Generate nodes for layers
  const generateNodes = (count: number, layerIndex: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `node-${layerIndex}-${i}`,
      x: layerIndex * 80,
      y: i * 50 + (400 - count * 50) / 2
    }));
  };

  // Create network layers
  const layers = [
    generateNodes(4, 0), // Input layer
    generateNodes(6, 1), // Hidden layer 1
    generateNodes(6, 2), // Hidden layer 2
    generateNodes(4, 3), // Output layer
  ];

  // Animation variants for nodes and connections
  const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full h-full"
      initial="initial"
      animate="animate"
    >
      <svg width="100%" height="100%" viewBox="0 0 400 400">
        {/* Draw connections between nodes */}
        {layers.slice(0, -1).map((layer, layerIndex) =>
          layer.map(node =>
            layers[layerIndex + 1].map((nextNode, j) => (
              <motion.path
                key={`${node.id}-${nextNode.id}`}
                d={`M ${node.x + 10} ${node.y} L ${nextNode.x} ${nextNode.y}`}
                stroke="rgba(155, 135, 245, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.5,
                  transition: { 
                    duration: 1,
                    delay: layerIndex * 0.3
                  }
                }}
              />
            ))
          )
        )}

        {/* Draw nodes */}
        {layers.map(layer =>
          layer.map(node => (
            <motion.g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="8"
                fill="#9b87f5"
                variants={nodeVariants}
              />
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="12"
                fill="none"
                stroke="#9b87f5"
                strokeWidth="2"
                strokeOpacity="0.3"
                variants={pulseVariants}
              />
            </motion.g>
          ))
        )}
      </svg>
    </motion.div>
  );
};

export default NeuronAnimation;
