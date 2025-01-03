import React from 'react';
import { Brain } from 'lucide-react';
import { cn } from '../../../lib/utils';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        'p-2 rounded-xl',
        'bg-primary-light/10'
      )}>
        <Brain className="w-6 h-6 text-primary-light" />
      </div>
      <span className="text-xl font-semibold text-white">
        Scalable
      </span>
    </div>
  );
}