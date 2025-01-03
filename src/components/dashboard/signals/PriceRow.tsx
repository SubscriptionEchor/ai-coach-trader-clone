import React from 'react';
import { cn } from '../../../lib/utils';

interface PriceRowProps {
  label: string;
  price: string;
  index: number;
}

export function PriceRow({ label, price, index }: PriceRowProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn(
        'text-xs text-gray-500',
        'min-w-[30px]'
      )}>
        {label}{index + 1}
      </span>
      <span className="text-white">${price}</span>
    </div>
  );
}