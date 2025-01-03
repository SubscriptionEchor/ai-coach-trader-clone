import React, { useState, useMemo } from 'react';
import { SignalHistoryHeader } from './SignalHistoryHeader';
import { SignalHistoryOverview } from './SignalHistoryOverview';
import { SignalHistoryTable } from './SignalHistoryTable';
import { cn } from '../../../lib/utils';

// Generate 15 closed signals with different pairs and dates
const generateClosedSignals = () => {
  const pairs = ['ARPA/USDT', 'BTC/USDT', 'ETH/USDT', 'SOL/USDT'];
  const dates = [
    '2024-02-10',
    '2024-02-09',
    '2024-02-08',
    '2024-02-07',
    '2024-02-06'
  ];
  
  return Array.from({ length: 15 }, (_, index) => ({
    id: `signal-${index}`,
    pair: pairs[index % pairs.length],
    type: index % 2 === 0 ? "long" as const : "spot" as const,
    time: "12:52 UST",
    date: dates[index % dates.length],
    entryPrice: '22,600',
    exitPrice: '23,800',
    stopLoss: "0.04542",
    leverage: index % 2 === 0 ? "4x" : "-",
    profit: `${(Math.random() * 30 + 10).toFixed(2)}%`,
    status: 'Closed'
  }));
};

const signals = generateClosedSignals();

export function SignalHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPair, setSelectedPair] = useState('All Pairs');

  // Filter signals based on search query and selected pair
  const filteredSignals = useMemo(() => {
    return signals.filter(signal => {
      const matchesSearch = signal.pair.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPair = selectedPair === 'All Pairs' || signal.pair === selectedPair;
      return matchesSearch && matchesPair;
    });
  }, [searchQuery, selectedPair]);

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <SignalHistoryHeader
        totalSignals={filteredSignals.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedPair={selectedPair}
        onPairChange={setSelectedPair}
      />

      {/* Overview Stats */}
      <SignalHistoryOverview />

      {/* Signals Table */}
      <SignalHistoryTable signals={filteredSignals} />

      {/* Empty State */}
      {filteredSignals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No closed signals found matching your criteria.</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={cn(
                'w-10 h-10 rounded-lg',
                'flex items-center justify-center',
                'text-sm font-medium',
                'transition-colors duration-200',
                page === 1 ? [
                  'bg-primary-light/10',
                  'text-primary-light',
                  'border border-primary-light/20'
                ] : [
                  'bg-white/5 hover:bg-white/10',
                  'text-gray-400 hover:text-white',
                  'border border-white/10'
                ]
              )}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}