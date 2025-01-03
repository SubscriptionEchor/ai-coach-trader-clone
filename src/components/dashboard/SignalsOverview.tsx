import React, { useState, useMemo } from 'react';
import { SignalCard } from './signals/SignalCard';
import { TelegramConnect } from './TelegramConnect';
import { SignalsHeader } from './signals/SignalsHeader';
import { cn } from '../../lib/utils';

// Generate 15 signals with different pairs
const generateSignals = () => {
  const pairs = ['ARPA/USDT', 'BTC/USDT', 'ETH/USDT', 'SOL/USDT'];
  return Array.from({ length: 15 }, (_, index) => ({
    pair: pairs[index % pairs.length],
    type: index % 2 === 0 ? "long" as const : "spot" as const,
    time: "12:52 UST",
    entryPrices: ['22,600', '22,600', '22,600'],
    exitPrices: ['22,600', '22,600', '22,600'],
    stopLoss: "0.04542",
    leverage: index % 2 === 0 ? "4x" : undefined
  }));
};

const signals = generateSignals();

export function SignalsOverview() {
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
      <SignalsHeader
        totalSignals={filteredSignals.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedPair={selectedPair}
        onPairChange={setSelectedPair}
      />

      {/* Telegram Connect Section */}
      <TelegramConnect />

      {/* Signals Grid */}
      <div className={cn(
        'grid gap-4',
        'grid-cols-1', // Mobile: 1 column
        'md:grid-cols-2', // Medium: 2 columns
        'lg:grid-cols-3', // Large: 3 columns
        '2xl:grid-cols-4', // Extra Large: 4 columns
        'auto-rows-fr' // Equal height rows
      )}>
        {filteredSignals.map((signal, index) => (
          <SignalCard
            key={index}
            {...signal}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredSignals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No signals found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
