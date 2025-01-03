import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Grid Pattern */}
      <div className={cn(
        'absolute inset-0',
        'bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)]',
        'bg-[size:64px_64px]',
        '[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]'
      )} />

      {/* Secondary Grid Pattern - Rotated */}
      <div className={cn(
        'absolute inset-0',
        'bg-[linear-gradient(to_right,rgba(51,144,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.03)_1px,transparent_1px)]',
        'bg-[size:32px_32px]',
        '[transform:rotate(45deg)_scale(2)]',
        '[mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_70%)]'
      )} />

      {/* Ambient Glow Effects */}
      <motion.div
        className={cn(
          'absolute -top-[25%] -left-[25%] w-[150%] h-[150%]',
          'bg-[radial-gradient(circle_800px_at_100%_200px,rgba(51,144,255,0.12),transparent_70%)]'
        )}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              'absolute w-1 h-1 rounded-full',
              'bg-primary-light/30'
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Perspective Grid */}
      <div className={cn(
        'absolute inset-0',
        'bg-[linear-gradient(to_right,rgba(51,144,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.02)_1px,transparent_1px)]',
        'bg-[size:100px_100px]',
        '[transform:perspective(500px)_rotateX(60deg)]',
        '[transform-origin:center_-100%]',
        'opacity-20'
      )} />
    </div>
  );
}