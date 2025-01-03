import React from 'react';
import { Users, Gift, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const stats = [
  {
    icon: Users,
    label: 'Total Referrals',
    value: '124',
    change: '+12% this month'
  },
  {
    icon: Gift,
    label: 'Total Rewards',
    value: '$2,450',
    change: '+8% this month'
  },
  {
    icon: TrendingUp,
    label: 'Commission Rate',
    value: '30%',
    change: 'Base rate'
  }
];

export function ReferralStats() {
  return (
    <div className={cn(
      'grid gap-6',
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    )}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            'p-6 rounded-xl',
            'bg-[#1d1d1d] border border-white/5',
            'hover:border-white/10',
            'transition-all duration-300',
            'group'
          )}
        >
          <div className="flex items-center gap-4">
            <div className={cn(
              'p-3 rounded-xl',
              'bg-primary-light/10',
              'group-hover:bg-primary-light/20',
              'transition-colors duration-300'
            )}>
              <stat.icon className="w-6 h-6 text-primary-light" />
            </div>
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <h3 className="text-2xl font-semibold text-white mt-1">{stat.value}</h3>
              <p className="text-sm text-primary-light mt-1">{stat.change}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}