import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

export function NetworkBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Grid Pattern */}
      <div className={cn(
        'absolute inset-0',
        'bg-[linear-gradient(to_right,rgba(51,144,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.03)_1px,transparent_1px)]',
        'bg-[size:64px_64px]'
      )} />

      {/* Glow Effects */}
      <motion.div
        className={cn(
          'absolute inset-0',
          'bg-[radial-gradient(circle_800px_at_50%_50%,rgba(51,144,255,0.08),transparent_70%)]'
        )}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}