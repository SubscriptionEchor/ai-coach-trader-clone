import React from 'react';
import { cn } from '../../../lib/utils';

interface SignalFiltersProps {
  selectedPair: string;
  onPairChange: (pair: string) => void;
}

export function SignalFilters({ selectedPair, onPairChange }: SignalFiltersProps) {
  const tradingPairs = ['All Pairs', 'ARPA/USDT', 'BTC/USDT', 'ETH/USDT', 'SOL/USDT'];

  return (
    <div className={cn(
      'flex items-center gap-2 p-2',
      'overflow-x-auto scrollbar-hide',
      'lg:border-l lg:border-white/10'
    )}>
      {tradingPairs.map((pair) => (
        <button
          key={pair}
          onClick={() => onPairChange(pair)}
          className={cn(
            'px-4 py-2 rounded-lg',
            'text-sm font-medium whitespace-nowrap',
            'transition-all duration-200',
            pair === selectedPair ? [
              'bg-primary-light/10',
              'text-primary-light',
              'border border-primary-light/20'
            ] : [
              'bg-white/5',
              'text-gray-400 hover:text-white',
              'border border-white/10 hover:border-white/20'
            ]
          )}
        >
          {pair}
        </button>
      ))}
    </div>
  );
}