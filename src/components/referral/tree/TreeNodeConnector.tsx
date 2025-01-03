import React from 'react';
import { cn } from '../../../lib/utils';

export function TreeNodeConnector() {
  return (
    <div className={cn(
      'w-px h-12 my-2',
      'bg-gradient-to-b from-white/5 via-white/10 to-white/5'
    )} />
  );
}