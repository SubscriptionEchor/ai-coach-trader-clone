import React from 'react';
import { TrendingUp, Eye } from 'lucide-react';
import { PriceRow } from './PriceRow';

interface PriceSectionProps {
  type: 'entry' | 'exit';
  prices: string[];
}

export function PriceSection({ type, prices }: PriceSectionProps) {
  const icon = type === 'entry' ? TrendingUp : Eye;
  const label = type === 'entry' ? 'Entry Price' : 'Exit Price';
  const prefix = type === 'entry' ? 'En' : 'Ex';

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {React.createElement(icon, { className: 'w-4 h-4 text-gray-400' })}
        <span className="text-sm text-gray-400">{label}</span>
      </div>
      <div className="space-y-2">
        {prices.map((price, i) => (
          <PriceRow 
            key={i} 
            label={prefix} 
            price={price} 
            index={i} 
          />
        ))}
      </div>
    </div>
  );
}