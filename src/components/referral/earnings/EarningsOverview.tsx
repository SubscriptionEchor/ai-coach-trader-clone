
import React, { useState } from 'react';
import { Wallet, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { WithdrawModal } from './WithdrawModal';
import { EarningsProjection } from './EarningsProjection';
import { EarningsHistory } from './EarningsHistory';

export function EarningsOverview() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  
  const stats = [
    {
      icon: Wallet,
      label: 'Available Balance',
      value: '$2,450.00',
      change: '+$450 this month',
      variant: 'primary'
    },
    {
      icon: TrendingUp,
      label: 'Total Earnings',
      value: '$12,845.00',
      change: 'Lifetime earnings',
      variant: 'success'
    },
    {
      icon: Users,
      label: 'Active Referrals',
      value: '124',
      change: '+12 this month',
      variant: 'info'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
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
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-2xl font-semibold text-white mt-1">{stat.value}</div>
                <div className="text-sm text-primary-light mt-1">{stat.change}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Withdraw Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowWithdrawModal(true)}
          className={cn(
            'flex items-center gap-2',
            'px-6 py-3 rounded-lg',
            'bg-primary-light hover:bg-primary-light/90',
            'text-black font-medium',
            'transition-all duration-200',
            'group'
          )}
        >
          <Wallet className="w-5 h-5" />
          Withdraw Funds
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Earnings Projection */}
      <EarningsProjection />

      {/* Earnings History */}
      <EarningsHistory />

      {/* Withdraw Modal */}
      <WithdrawModal
        isOpen={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
        availableBalance={2450}
      />
    </div>
  );
}
