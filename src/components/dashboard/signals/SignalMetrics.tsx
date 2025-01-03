import React from 'react';
import { cn } from '../../../lib/utils';

interface SignalMetricsProps {
  stopLoss: string;
  leverage?: string;
}

export function SignalMetrics({ stopLoss, leverage }: SignalMetricsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className={cn(
        'p-4 rounded-lg',
        'bg-white/5 backdrop-blur-sm',
        'border border-white/5',
        'group-hover:border-white/10',
        'transition-colors duration-300'
      )}>
        <div className="text-xs text-gray-400 mb-1">Stop Loss</div>
        <div className="text-white font-medium">{stopLoss}</div>
      </div>
      
      {leverage && (
        <div className={cn(
          'p-4 rounded-lg',
          'bg-white/5 backdrop-blur-sm',
          'border border-white/5',
          'group-hover:border-white/10',
          'transition-colors duration-300'
        )}>
          <div className="text-xs text-gray-400 mb-1">Leverage</div>
          <div className="text-white font-medium">{leverage}</div>
        </div>
      )}
    </div>
  );
}