import React from 'react';
import { cn } from '../../../lib/utils';

interface DividerProps {
  text: string;
  className?: string;
}

export function Divider({ text, className }: DividerProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 text-gray-400 bg-black">{text}</span>
      </div>
    </div>
  );
}