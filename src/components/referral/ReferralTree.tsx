import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

// Sample referral data for all 5 levels
const referralData = {
  // Level 1 & 2 with user details
  level1: [
    { name: 'John Smith', date: '2024-02-10', rewards: '$120' },
    { name: 'Sarah Wilson', date: '2024-02-09', rewards: '$85' },
    { name: 'Mike Johnson', date: '2024-02-08', rewards: '$95' }
  ],
  level2: [
    { name: 'Emma Davis', date: '2024-02-07', rewards: '$45' },
    { name: 'James Brown', date: '2024-02-06', rewards: '$65' }
  ],
  // Levels 3-5 with only counts
  level3: { count: 12, totalRewards: '$320' },
  level4: { count: 28, totalRewards: '$450' },
  level5: { count: 45, totalRewards: '$680' }
};

export function ReferralTree() {
  return (
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
        <div className="flex items-center gap-3 mb-6">
          <div className={cn(
            'p-2.5 rounded-lg',
            'bg-primary-light/10'
          )}>
            <Users className="w-5 h-5 text-primary-light" />
          </div>
          <h2 className="text-xl font-semibold text-white">Referral Network</h2>
        </div>

        {/* Tree Structure */}
        <div className="space-y-6">
          {/* Level 1 - Detailed View */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={cn(
                'px-2.5 py-1 rounded-full text-xs font-medium',
                'bg-emerald-500/10 text-emerald-500'
              )}>
                Level 1
              </div>
              <span className="text-sm text-gray-400">
                ({referralData.level1.length} referrals)
              </span>
            </div>

            <div className="space-y-3">
              {referralData.level1.map((referral, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
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
                      <div className="w-8 h-8 rounded-full bg-primary-light/10 flex items-center justify-center">
                        <span className="text-primary-light font-medium">
                          {referral.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-white">{referral.name}</div>
                        <div className="text-sm text-gray-400">{referral.date}</div>
                      </div>
                    </div>
                    <div className="text-emerald-500 font-medium">{referral.rewards}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Level 2 - Detailed View */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={cn(
                'px-2.5 py-1 rounded-full text-xs font-medium',
                'bg-blue-500/10 text-blue-500'
              )}>
                Level 2
              </div>
              <span className="text-sm text-gray-400">
                ({referralData.level2.length} referrals)
              </span>
            </div>

            <div className="space-y-3 pl-6 border-l border-white/10">
              {referralData.level2.map((referral, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
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
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <span className="text-blue-500 font-medium">
                          {referral.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-white">{referral.name}</div>
                        <div className="text-sm text-gray-400">{referral.date}</div>
                      </div>
                    </div>
                    <div className="text-emerald-500 font-medium">{referral.rewards}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Levels 3-5 - Count Only View */}
          {[
            { level: 3, color: 'purple' },
            { level: 4, color: 'pink' },
            { level: 5, color: 'orange' }
          ].map(({ level, color }) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: level * 0.1 }}
              className="pl-6 border-l border-white/10"
            >
              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <div className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-2',
                    `bg-${color}-500/10 text-${color}-500`
                  )}>
                    Level {level}
                    <span className="text-gray-400">
                      ({referralData[`level${level}`].count} referrals)
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Total Rewards: {referralData[`level${level}`].totalRewards}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <button className={cn(
          'flex items-center gap-2 mt-6',
          'text-sm text-primary-light',
          'hover:text-primary-light/80',
          'transition-colors duration-200',
          'group'
        )}>
          View All Referrals
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}