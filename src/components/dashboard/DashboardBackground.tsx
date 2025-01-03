import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function DashboardBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base Grid Pattern */}
      <div className={cn(
        'absolute inset-0',
        'bg-[linear-gradient(to_right,rgba(51,144,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.03)_1px,transparent_1px)]',
        'bg-[size:64px_64px]',
        'opacity-30'
      )} />

      {/* Diagonal Grid Pattern */}
      <div className={cn(
        'absolute inset-0',
        'bg-[linear-gradient(45deg,rgba(51,144,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(51,144,255,0.02)_1px,transparent_1px)]',
        'bg-[size:48px_48px]',
        'opacity-20'
      )} />

      {/* Radial Gradient Overlay */}
      <div className={cn(
        'absolute inset-0',
        'bg-[radial-gradient(circle_at_center,transparent_0%,#111_100%)]',
        'opacity-60'
      )} />

      {/* Ambient Glow */}
      <motion.div
        className={cn(
          'absolute inset-0',
          'bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(51,144,255,0.08),transparent_70%)]'
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