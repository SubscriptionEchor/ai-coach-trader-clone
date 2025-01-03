import React from 'react';
import { Bitcoin } from 'lucide-react';
import { SignalBadge } from '../signals/SignalBadge';
import { cn } from '../../../lib/utils';

interface Signal {
  id: string;
  pair: string;
  type: 'long' | 'spot';
  time: string;
  date: string;
  entryPrice: string;
  exitPrice: string;
  stopLoss: string;
  leverage: string;
  profit: string;
  status: string;
}

interface SignalHistoryTableProps {
  signals: Signal[];
}

export function SignalHistoryTable({ signals }: SignalHistoryTableProps) {
  return (
    <div className={cn(
      'relative rounded-xl overflow-hidden',
      'border border-white/5',
      'bg-[#1d1d1d]'
    )}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/5">
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Pair</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Type</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Date & Time</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Entry Price</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Exit Price</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Stop Loss</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Leverage</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Profit</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {signals.map((signal) => (
              <tr 
                key={signal.id}
                className={cn(
                  'border-b border-white/5',
                  'hover:bg-white/[0.02]',
                  'transition-colors duration-200'
                )}
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'p-2 rounded-lg',
                      'bg-orange-500/10',
                      'group-hover:bg-orange-500/20',
                      'transition-colors duration-300'
                    )}>
                      <Bitcoin className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="font-medium text-white">{signal.pair}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <SignalBadge type={signal.type} />
                </td>
                <td className="py-4 px-6">
                  <div className="text-white">{signal.date}</div>
                  <div className="text-sm text-gray-400">{signal.time}</div>
                </td>
                <td className="py-4 px-6 text-white">${signal.entryPrice}</td>
                <td className="py-4 px-6 text-white">${signal.exitPrice}</td>
                <td className="py-4 px-6 text-white">{signal.stopLoss}</td>
                <td className="py-4 px-6 text-white">{signal.leverage}</td>
                <td className="py-4 px-6">
                  <span className="text-emerald-500">{signal.profit}</span>
                </td>
                <td className="py-4 px-6">
                  <span className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium',
                    'bg-gray-500/10 text-gray-400'
                  )}>
                    {signal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}