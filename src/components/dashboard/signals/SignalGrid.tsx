import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { Signal } from './types';
import { SignalCard } from './SignalCard';

interface SignalGridProps {
  signals: Signal[];
}

export function SignalGrid({ signals }: SignalGridProps) {
  return (
    <div className={cn(
      'grid gap-4',
      'grid-cols-1', // Mobile: 1 column
      'md:grid-cols-2', // Medium: 2 columns
      'lg:grid-cols-3', // Large: 3 columns
      '2xl:grid-cols-4', // Extra Large: 4 columns
      'auto-rows-fr' // Equal height rows
    )}>
      {signals.map((signal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <SignalCard {...signal} />
        </motion.div>
      ))}
    </div>
  );
}