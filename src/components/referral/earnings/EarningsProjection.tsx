
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users } from 'lucide-react';
import { cn } from '../../../lib/utils';

const projections = [
  {
    referrals: 50,
    earnings: '$1,500',
    timeframe: '~1 month'
  },
  {
    referrals: 100,
    earnings: '$3,000',
    timeframe: '~2 months'
  },
  {
    referrals: 500,
    earnings: '$15,000',
    timeframe: '~6 months'
  },
  {
    referrals: 1000,
    earnings: '$30,000',
    timeframe: '~1 year'
  }
];

export function EarningsProjection() {
  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={cn(
          'p-2.5 rounded-lg',
          'bg-primary-light/10'
        )}>
          <TrendingUp className="w-5 h-5 text-primary-light" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Earnings Projection</h3>
          <p className="text-sm text-gray-400 mt-1">
            Estimated earnings based on referral milestones
          </p>
        </div>
      </div>

      {/* Projections Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projections.map((projection, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'p-4 rounded-lg',
              'bg-white/5 border border-white/10',
              'hover:border-white/20',
              'transition-all duration-300'
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={cn(
                'p-2 rounded-lg',
                'bg-emerald-500/10'
              )}>
                <Users className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="text-sm text-gray-400">
                {projection.referrals} Referrals
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-xl font-semibold text-emerald-500">
                {projection.earnings}
              </div>
              <div className="text-sm text-gray-400">
                Estimated {projection.timeframe}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
