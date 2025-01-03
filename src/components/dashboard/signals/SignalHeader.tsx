import React from 'react';
import { Bitcoin } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { SignalBadge } from './SignalBadge';

interface SignalHeaderProps {
  pair: string;
  type: 'long' | 'spot';
  time: string;
}

export function SignalHeader({ pair, type, time }: SignalHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={cn(
          'p-2.5 rounded-xl',
          'bg-gradient-to-br from-orange-500/20 to-orange-500/5',
          'group-hover:from-orange-500/30 group-hover:to-orange-500/10',
          'transition-colors duration-300'
        )}>
          <Bitcoin className="w-6 h-6 text-orange-500" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-white text-lg">{pair}</h3>
            <SignalBadge type={type} />
          </div>
          <div className="text-sm text-gray-400 mt-2">{time}</div>
        </div>
      </div>
    </div>
  );
}