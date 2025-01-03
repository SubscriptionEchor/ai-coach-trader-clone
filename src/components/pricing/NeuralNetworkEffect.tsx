import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Node {
  x: number;
  y: number;
  connections: number[];
}

export function NeuralNetworkEffect() {
  // Generate random nodes in a grid-like pattern
  const nodes: Node[] = Array.from({ length: 15 }, (_, i) => ({
    x: 25 + (Math.random() * 50) + (i % 3) * 150,
    y: 50 + (Math.random() * 30) + Math.floor(i / 3) * 100,
    connections: Array.from({ length: 2 }, () => Math.floor(Math.random() * 15))
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural Network Background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
        {/* Connections */}
        {nodes.map((node, i) => 
          node.connections.map((targetIndex, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={nodes[targetIndex].x}
              y2={nodes[targetIndex].y}
              stroke="url(#gradient-line)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 0.5, 0],
                strokeWidth: [1, 2, 1]
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))
        )}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="url(#gradient-node)"
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

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(191,231,255)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="rgb(51,144,255)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(0,99,235)" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="gradient-node">
            <stop offset="0%" stopColor="rgb(51,144,255)" />
            <stop offset="100%" stopColor="rgb(0,99,235)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Ambient Glow */}
      <motion.div
        className={cn(
          'absolute inset-0',
          'bg-[radial-gradient(circle_600px_at_50%_50%,rgba(51,144,255,0.1),transparent_70%)]'
        )}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Data Flow Particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-light/30"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: '100%'
          }}
          animate={{
            y: [null, '0%'],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}