import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Target, Clock } from 'lucide-react';
import { cn } from '../../../lib/utils';

const stats = [
  {
    icon: TrendingUp,
    label: 'Success Rate',
    value: '94%',
    change: '+2.5% this month',
    trend: 'up',
    gradient: 'from-emerald-500/20 to-emerald-500/5'
  },
  {
    icon: BarChart2,
    label: 'Total Signals',
    value: '1,248',
    change: 'Last 30 days',
    trend: 'neutral',
    gradient: 'from-blue-500/20 to-blue-500/5'
  },
  {
    icon: Target,
    label: 'Avg. Profit',
    value: '18.5%',
    change: '+3.2% vs last month',
    trend: 'up',
    gradient: 'from-violet-500/20 to-violet-500/5'
  },
  {
    icon: Clock,
    label: 'Avg. Hold Time',
    value: '3.2 days',
    change: '-0.5 days vs last month',
    trend: 'down',
    gradient: 'from-amber-500/20 to-amber-500/5'
  }
];

export function SignalHistoryOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            'relative p-6 rounded-xl',
            'bg-[#1d1d1d] border border-white/5',
            'hover:border-white/10',
            'transition-all duration-300',
            'group'
          )}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className={cn(
              'absolute inset-0',
              'bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]'
            )} />
            <div className={cn(
              'absolute inset-0',
              'bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)]',
              'bg-[size:14px_24px]'
            )} />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Icon */}
            <div className={cn(
              'inline-flex p-3 rounded-xl mb-4',
              'bg-gradient-to-br',
              stat.gradient,
              'group-hover:scale-110',
              'transition-transform duration-300'
            )}>
              <stat.icon className={cn(
                'w-6 h-6',
                stat.trend === 'up' ? 'text-emerald-500' :
                stat.trend === 'down' ? 'text-red-500' :
                'text-blue-500'
              )} />
            </div>

            {/* Label */}
            <div className="text-sm text-gray-400 mb-1">
              {stat.label}
            </div>

            {/* Value */}
            <div className="text-2xl font-semibold text-white mb-2">
              {stat.value}
            </div>

            {/* Change */}
            <div className={cn(
              'text-sm',
              stat.trend === 'up' ? 'text-emerald-500' :
              stat.trend === 'down' ? 'text-red-500' :
              'text-gray-400'
            )}>
              {stat.change}
            </div>

            {/* Hover Effect */}
            <div className={cn(
              'absolute inset-0 opacity-0 group-hover:opacity-100',
              'bg-gradient-to-b from-white/[0.02] via-transparent to-transparent',
              'transition-opacity duration-300'
            )} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}