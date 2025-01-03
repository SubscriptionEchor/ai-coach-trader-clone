import React from 'react';
import { cn } from '../../../lib/utils';

export function GridPattern() {
  return (
    <div className="absolute inset-0">
      <div className={cn(
        'absolute inset-0',
        'bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)]',
        'bg-[size:40px_40px]',
        'opacity-20'
      )} />
    </div>
  );
}