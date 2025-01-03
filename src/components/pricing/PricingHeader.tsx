import React from 'react';
import { CountdownTimer } from './CountdownTimer';

interface PricingHeaderProps {
  price: string;
  period: string;
}

export function PricingHeader({ price, period }: PricingHeaderProps) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <CountdownTimer />
      </div>
      
      <div className="flex items-baseline mb-2">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Free
          </span>
          <span className="text-gray-400 ml-2">/{period}</span>
        </div>
        <div className="ml-4 flex items-baseline">
          <span className="text-2xl font-medium text-gray-500 line-through">{price}</span>
          <span className="text-sm text-gray-600 ml-1 line-through">/{period}</span>
        </div>
      </div>
      <p className="text-gray-400">Limited time offer. Start your journey today.</p>
    </div>
  );
}