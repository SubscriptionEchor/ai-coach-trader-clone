import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

export function AmbientGlow() {
  return (
    <motion.div
      className={cn(
        'absolute inset-0',
        'bg-[radial-gradient(circle_800px_at_50%_50%,rgba(51,144,255,0.15),transparent_70%)]'
      )}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [0.8, 1.1, 0.8],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}