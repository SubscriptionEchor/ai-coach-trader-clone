import React, { useState } from 'react';
import { Gift, TrendingUp, ChevronRight, Wallet, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { WithdrawModal } from './WithdrawModal';
import { RewardHistoryModal } from './RewardHistoryModal';

// Sample rewards data
const rewardsData = [
  {
    type: 'Level 1 Commission',
    amount: '$45.00',
    date: '2024-02-10',
    referral: 'John Smith',
    status: 'completed'
  },
  {
    type: 'Level 2 Commission',
    amount: '$15.00',
    date: '2024-02-09',
    referral: 'Emma Davis',
    status: 'completed'
  },
  {
    type: 'Level 1 Commission',
    amount: '$30.00',
    date: '2024-02-08',
    referral: 'Sarah Wilson',
    status: 'completed'
  },
  {
    type: 'Bonus Reward',
    amount: '$100.00',
    date: '2024-02-07',
    referral: 'System',
    status: 'completed'
  }
];

export function ReferralRewards() {
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const totalBalance = 190.00;

  return (
    <>
      <div className={cn(
        'p-6 rounded-xl',
        'bg-[#1d1d1d] border border-white/5',
        'relative overflow-hidden'
      )}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={cn(
                'p-2.5 rounded-lg',
                'bg-primary-light/10'
              )}>
                <Gift className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Recent Rewards</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Available Balance: <span className="text-emerald-500 font-medium">${totalBalance.toFixed(2)}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsHistoryModalOpen(true)}
                className={cn(
                  'flex items-center gap-2',
                  'px-4 py-2 rounded-lg',
                  'bg-white/5 hover:bg-white/10',
                  'text-gray-400 hover:text-white',
                  'border border-white/10',
                  'transition-all duration-200',
                  'group'
                )}
              >
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">History</span>
              </button>

              <button
                onClick={() => setIsWithdrawModalOpen(true)}
                className={cn(
                  'flex items-center gap-2',
                  'px-4 py-2 rounded-lg',
                  'bg-emerald-500/10 hover:bg-emerald-500/20',
                  'text-emerald-500',
                  'border border-emerald-500/20',
                  'transition-all duration-200',
                  'group'
                )}
              >
                <Wallet className="w-4 h-4" />
                <span className="font-medium">Withdraw</span>
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className={cn(
              'p-4 rounded-lg',
              'bg-white/5 border border-white/10',
              'group-hover:border-white/20',
              'transition-all duration-300'
            )}>
              <div className="text-sm text-gray-400 mb-1">Monthly Earnings</div>
              <div className="text-2xl font-semibold text-white">$345.00</div>
              <div className="flex items-center gap-1 mt-1 text-emerald-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+12% this month</span>
              </div>
            </div>

            <div className={cn(
              'p-4 rounded-lg',
              'bg-white/5 border border-white/10',
              'group-hover:border-white/20',
              'transition-all duration-300'
            )}>
              <div className="text-sm text-gray-400 mb-1">Total Earned</div>
              <div className="text-2xl font-semibold text-white">$2,450.00</div>
              <div className="text-sm text-gray-400 mt-1">Lifetime earnings</div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="space-y-4">
            {rewardsData.slice(0, 4).map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'p-4 rounded-lg',
                  'bg-white/5 border border-white/10',
                  'hover:border-white/20',
                  'transition-all duration-300',
                  'group'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'p-2 rounded-lg',
                      'bg-emerald-500/10',
                      'group-hover:bg-emerald-500/20',
                      'transition-colors duration-300'
                    )}>
                      <ArrowDownRight className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{reward.type}</div>
                      <div className="text-sm text-gray-400">From: {reward.referral}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-500 font-medium">{reward.amount}</div>
                    <div className="text-sm text-gray-400">{reward.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <button
            onClick={() => setIsHistoryModalOpen(true)}
            className={cn(
              'flex items-center gap-2 mt-6',
              'text-sm text-primary-light',
              'hover:text-primary-light/80',
              'transition-colors duration-200',
              'group'
            )}
          >
            View All Rewards
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        availableBalance={totalBalance}
      />

      <RewardHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        rewards={rewardsData}
      />
    </>
  );
}