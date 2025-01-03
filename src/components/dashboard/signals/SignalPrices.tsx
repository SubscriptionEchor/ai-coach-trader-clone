import React from 'react';
import { cn } from '../../../lib/utils';
import { PriceSection } from './PriceSection';

interface SignalPricesProps {
  entryPrices: string[];
  exitPrices: string[];
}

export function SignalPrices({ entryPrices, exitPrices }: SignalPricesProps) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <PriceSection type="entry" prices={entryPrices} />
      <PriceSection type="exit" prices={exitPrices} />
    </div>
  );
}