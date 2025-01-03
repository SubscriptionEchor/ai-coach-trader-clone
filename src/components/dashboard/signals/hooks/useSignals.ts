import { useState, useCallback, useMemo } from 'react';
import { Signal } from '../types';
import { generateSignals, filterSignals } from '../utils';

export function useSignals() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPair, setSelectedPair] = useState('All Pairs');

  // Generate initial signals
  const signals = useMemo(() => generateSignals(15), []);

  // Filter signals based on search and selected pair
  const filteredSignals = useMemo(() => 
    filterSignals(signals, searchQuery, selectedPair),
    [signals, searchQuery, selectedPair]
  );

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handlePairChange = useCallback((pair: string) => {
    setSelectedPair(pair);
  }, []);

  return {
    signals: filteredSignals,
    searchQuery,
    selectedPair,
    handleSearch,
    handlePairChange,
  };
}