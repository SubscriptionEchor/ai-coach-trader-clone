import React from 'react';
import { cn } from '../../../lib/utils';

interface SignalBadgeProps {
  type: 'long' | 'spot';
}

export function SignalBadge({ type }: SignalBadgeProps) {
  const styles = {
    long: 'bg-purple-500/10 text-purple-500',
    spot: 'bg-indigo-500/10 text-indigo-500'
  };

  return (
    <span className={cn(
      'text-xs px-2 py-0.5 rounded',
      styles[type]
    )}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}