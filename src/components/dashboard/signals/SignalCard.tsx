import React from 'react';
import { Bitcoin } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Signal } from './types';
import { SignalHeader } from './SignalHeader';
import { SignalPrices } from './SignalPrices';
import { SignalMetrics } from './SignalMetrics';

interface SignalCardProps extends Signal {}

export function SignalCard({
  pair,
  type,
  time,
  entryPrices,
  exitPrices,
  stopLoss,
  leverage
}: SignalCardProps) {
  return (
    <div className={cn(
      'relative overflow-hidden',
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'hover:border-white/10',
      'transition-all duration-300',
      'hover:translate-y-[-2px]',
      'hover:shadow-lg hover:shadow-black/20',
      'cursor-pointer',
      'group'
    )}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      {/* Content */}
      <div className="relative">
        <SignalHeader pair={pair} type={type} time={time} />
        <SignalPrices entryPrices={entryPrices} exitPrices={exitPrices} />
        <SignalMetrics stopLoss={stopLoss} leverage={leverage} />
      </div>
    </div>
  );
}