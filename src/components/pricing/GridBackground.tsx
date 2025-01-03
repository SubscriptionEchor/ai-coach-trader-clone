import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className={cn(
          'absolute inset-0',
          'bg-[linear-gradient(to_right,rgb(51,144,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(51,144,255,0.1)_1px,transparent_1px)]',
          'bg-[size:4rem_4rem]',
          'opacity-20'
        )}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className={cn(
          'absolute -top-[25%] -left-[25%] w-[150%] h-[150%]',
          'bg-[radial-gradient(circle_800px_at_100%_200px,rgba(51,144,255,0.1),transparent_70%)]'
        )}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className={cn(
          'absolute -top-[25%] -right-[25%] w-[150%] h-[150%]',
          'bg-[radial-gradient(circle_800px_at_0%_200px,rgba(51,144,255,0.1),transparent_70%)]'
        )}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Grid Pulse Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={cn(
          'h-full w-full',
          'bg-[linear-gradient(to_right,rgb(51,144,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgb(51,144,255,0.2)_1px,transparent_1px)]',
          'bg-[size:4rem_4rem]',
          '[transform:perspective(500px)_rotateX(60deg)]',
          'origin-[center_-100%]'
        )} />
      </motion.div>
    </div>
  );
}