import React from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '../../../lib/utils';

export function DateNavigation() {
  return (
    <div className="flex items-center gap-3">
      <button className={cn(
        'px-4 py-2 rounded-lg',
        'bg-white/5 hover:bg-white/10',
        'text-white transition-colors'
      )}>
        Today
      </button>
      <button className={cn(
        'px-4 py-2 rounded-lg',
        'bg-white/5 hover:bg-white/10',
        'text-gray-400 hover:text-white',
        'transition-colors'
      )}>
        Yesterday
      </button>
      <button className={cn(
        'p-2 rounded-lg',
        'bg-white/5 hover:bg-white/10',
        'text-gray-400 hover:text-white',
        'transition-colors'
      )}>
        <Calendar className="w-5 h-5" />
      </button>
      <button className={cn(
        'p-2 rounded-lg',
        'bg-white/5 hover:bg-white/10',
        'text-gray-400 hover:text-white',
        'transition-colors'
      )}>
        <FilterIcon />
      </button>
    </div>
  );
}

function FilterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}