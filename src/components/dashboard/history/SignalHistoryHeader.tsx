import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface SignalHistoryHeaderProps {
  totalSignals: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedPair: string;
  onPairChange: (pair: string) => void;
}

export function SignalHistoryHeader({
  totalSignals,
  searchQuery,
  onSearchChange,
  selectedPair,
  onPairChange
}: SignalHistoryHeaderProps) {
  const tradingPairs = ['All Pairs', 'ARPA/USDT', 'BTC/USDT', 'ETH/USDT', 'SOL/USDT'];

  return (
    <div className="mb-8">
      {/* Title and Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-2">
            Signals History
          </h1>
          <p className="text-gray-400">
            {totalSignals} closed signals
          </p>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className={cn(
        'flex flex-col lg:flex-row items-stretch gap-4',
        'p-2 rounded-2xl',
        'bg-[#1d1d1d]',
        'border border-white/5'
      )}>
        {/* Search Input */}
        <div className="flex-1 relative group">
          <div className={cn(
            'absolute inset-0 -m-0.5 rounded-xl opacity-0',
            'bg-gradient-to-r from-primary-light/20 via-primary-light/10 to-transparent',
            'group-focus-within:opacity-100',
            'transition-opacity duration-300'
          )} />
          
          <div className="relative">
            <Search className={cn(
              'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5',
              'text-gray-500 group-focus-within:text-primary-light',
              'transition-colors duration-200'
            )} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by trading pair..."
              className={cn(
                'w-full pl-12 pr-4 py-3 rounded-xl',
                'bg-white/5',
                'border border-white/10',
                'text-white placeholder-gray-400',
                'focus:outline-none focus:border-primary-light/20',
                'transition-all duration-200'
              )}
            />
          </div>
        </div>

        {/* Trading Pair Filters */}
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
      </div>
    </div>
  );
}