import { Signal } from './types';

export function generateSignals(count: number): Signal[] {
  const pairs = ['ARPA/USDT', 'BTC/USDT', 'ETH/USDT', 'SOL/USDT'];
  
  return Array.from({ length: count }, (_, index) => ({
    pair: pairs[index % pairs.length],
    type: index % 2 === 0 ? "long" : "spot",
    time: "12:52 UST",
    entryPrices: ['22,600', '22,600', '22,600'],
    exitPrices: ['22,600', '22,600', '22,600'],
    stopLoss: "0.04542",
    leverage: index % 2 === 0 ? "4x" : undefined
  }));
}

export function filterSignals(signals: Signal[], searchQuery: string, selectedPair: string): Signal[] {
  return signals.filter(signal => {
    const matchesSearch = signal.pair.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPair = selectedPair === 'All Pairs' || signal.pair === selectedPair;
    return matchesSearch && matchesPair;
  });
}
