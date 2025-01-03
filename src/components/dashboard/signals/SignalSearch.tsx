import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface SignalSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function SignalSearch({ value, onChange }: SignalSearchProps) {
  return (
    <div className="relative flex-1 group">
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by trading pair..."
          className={cn(
            'w-full pl-12 pr-4 py-3 rounded-xl',
            'bg-white/5',
            'border border-white/10',
            'text-white placeholder-gray-400',
            'focus:outline-none focus:border-primary-light/30',
            'transition-all duration-200'
          )}
        />
      </div>
    </div>
  );
}