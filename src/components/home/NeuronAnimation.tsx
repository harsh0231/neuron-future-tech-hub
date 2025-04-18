
import React from 'react';
import { motion } from 'framer-motion';

const NeuronAnimation = () => {
  // Generate nodes for layers
  const generateNodes = (count: number, layerIndex: number, totalLayers: number) => {
    const layerSpacing = 100; // Increased spacing between layers
    return Array.from({ length: count }, (_, i) => ({
      id: `node-${layerIndex}-${i}`,
      x: (layerIndex * layerSpacing) + (100), // Add padding to prevent cutoff
      y: i * 50 + (400 - count * 50) / 2
    }));
  };

  // Create network layers with better spacing
  const totalLayers = 4;
  const layers = [
    generateNodes(4, 0, totalLayers), // Input layer
    generateNodes(6, 1, totalLayers), // Hidden layer 1
    generateNodes(6, 2, totalLayers), // Hidden layer 2
    generateNodes(4, 3, totalLayers), // Output layer
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

  // Colors matching the neuron-primary theme
  const primaryColor = "#ea384c";
  const primaryColorTransparent = "rgba(234, 56, 76, 0.2)";

  return (
    <motion.div 
      className="w-full h-full absolute inset-0 pointer-events-none z-0 opacity-40"
      initial="initial"
      animate="animate"
    >
      <svg width="100%" height="100%" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
        {/* Draw connections between nodes */}
        {layers.slice(0, -1).map((layer, layerIndex) =>
          layer.map(node =>
            layers[layerIndex + 1].map((nextNode, j) => (
              <motion.path
                key={`${node.id}-${nextNode.id}`}
                d={`M ${node.x + 10} ${node.y} L ${nextNode.x} ${nextNode.y}`}
                stroke={primaryColorTransparent}
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
                fill={primaryColor}
                variants={nodeVariants}
              />
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="12"
                fill="none"
                stroke={primaryColor}
                strokeWidth="2"
                strokeOpacity="0.3"
                variants={pulseVariants}
              />
            </motion.g>
          ))
        )}

        {/* Add signal animations along connections */}
        {layers.slice(0, -1).map((layer, layerIndex) =>
          layer.map(node =>
            layers[layerIndex + 1].map((nextNode, j) => {
              const animationDelay = Math.random() * 3;
              return (
                <motion.circle
                  key={`signal-${node.id}-${nextNode.id}`}
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill={primaryColor}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    cx: [node.x, nextNode.x],
                    cy: [node.y, nextNode.y],
                    transition: {
                      duration: 2,
                      delay: animationDelay,
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }}
                />
              );
            })
          )
        )}
      </svg>
    </motion.div>
  );
};

export default NeuronAnimation;
