import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

interface NetworkConnectorProps {
  from: string;
  to: string;
  count?: number;
}

export function NetworkConnector({ from, to, count }: NetworkConnectorProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          'w-px h-8', // Reduced from h-16
          'bg-gradient-to-b from-primary-light/30 to-primary-light/10'
        )}
      />
      {count && (
        <div className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'px-2 py-0.5 rounded-full', // Reduced padding
          'bg-primary-light/10',
          'text-primary-light text-xs font-medium'
        )}>
          {count}
        </div>
      )}
    </div>
  );
}