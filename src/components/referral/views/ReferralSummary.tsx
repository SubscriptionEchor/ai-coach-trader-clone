import React from 'react';
import { Users } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ReferralSummaryProps {
  level: number;
  totalUsers: number;
  totalEarnings: string;
}

export function ReferralSummary({ level, totalUsers, totalEarnings }: ReferralSummaryProps) {
  return (
    <div className={cn(
      'p-4 rounded-lg',
      'bg-white/5 border border-white/10',
      'hover:border-white/20',
      'transition-all duration-300'
    )}>
      <div className="flex items-center gap-3 mb-3">
        <div className={cn(
          'p-2 rounded-lg',
          'bg-primary-light/10'
        )}>
          <Users className="w-5 h-5 text-primary-light" />
        </div>
        <h4 className="font-medium text-white">Level {level}</h4>
      </div>

      <div className="space-y-2">
        <div>
          <div className="text-sm text-gray-400">Total Referrals</div>
          <div className="text-lg font-medium text-white">{totalUsers}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Total Earnings</div>
          <div className="text-lg font-medium text-emerald-500">{totalEarnings}</div>
        </div>
      </div>
    </div>
  );
}