import React from 'react';
import { motion } from 'framer-motion';
import { Node } from './types';

interface NetworkConnectionsProps {
  nodes: Node[];
}

export function NetworkConnections({ nodes }: NetworkConnectionsProps) {
  return (
    <>
      {nodes.map((node, i) => 
        node.connections.map((targetIndex, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={node.x}
            y1={node.y}
            x2={nodes[targetIndex].x}
            y2={nodes[targetIndex].y}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))
      )}
    </>
  );
}