import React from 'react';
import { motion } from 'framer-motion';
import { Node } from './types';

interface NetworkNodesProps {
  nodes: Node[];
}

export function NetworkNodes({ nodes }: NetworkNodesProps) {
  return (
    <>
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="4"
          fill="url(#node-gradient)"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}
    </>
  );
}