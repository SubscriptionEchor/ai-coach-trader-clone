import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function HeroAnimation() {
  const { RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/trading_charts.riv',
    stateMachines: ['State Machine 1'],
    autoplay: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={cn(
        'relative w-full aspect-square max-w-2xl mx-auto',
        'rounded-2xl overflow-hidden',
        'bg-[#1d1d1d]',
        'border border-white/10',
        'group'
      )}
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-radial from-primary-light/20 via-transparent to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />

      {/* Rive Animation */}
      <div className="relative z-10">
        <RiveComponent />
      </div>
    </motion.div>
  );
}