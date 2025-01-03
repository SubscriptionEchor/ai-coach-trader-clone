
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Sample data structure for the referral list
const referralData = {
  directReferrals: [
    { name: "John Smith", date: "2024-02-10", earnings: "$450", referrals: 15 },
    { name: "Sarah Wilson", date: "2024-02-09", earnings: "$660", referrals: 22 },
    { name: "Mike Johnson", date: "2024-02-08", earnings: "$540", referrals: 18 }
  ],
  indirectReferrals: [
    { name: "Emma Davis", date: "2024-02-07", earnings: "$240", referrals: 8 },
    { name: "James Brown", date: "2024-02-06", earnings: "$360", referrals: 12 },
    { name: "Michael Lee", date: "2024-02-05", earnings: "$150", referrals: 5 }
  ]
};

export function ReferralListView() {
  return (
    <div className="space-y-8">
      {/* Direct Referrals */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className={cn(
            'px-2.5 py-1 rounded-full text-xs font-medium',
            'bg-emerald-500/10 text-emerald-500'
          )}>
            Direct Referrals
          </div>
          <span className="text-sm text-gray-400">
            (Level 1)
          </span>
        </div>

        <div className="space-y-4">
          {referralData.directReferrals.map((referral, index) => (
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
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-500 text-lg font-medium">
                      {referral.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white">{referral.name}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Joined {referral.date} • {referral.referrals} referrals
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-500 font-medium">{referral.earnings}</div>
                  <div className="text-sm text-gray-400 mt-1">Total earnings</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indirect Referrals */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className={cn(
            'px-2.5 py-1 rounded-full text-xs font-medium',
            'bg-blue-500/10 text-blue-500'
          )}>
            Indirect Referrals
          </div>
          <span className="text-sm text-gray-400">
            (Level 2)
          </span>
        </div>

        <div className="space-y-4">
          {referralData.indirectReferrals.map((referral, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={cn(
                'p-4 rounded-lg',
                'bg-white/5 border border-white/10',
                'hover:border-white/20',
                'transition-all duration-300',
                'group'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-500 text-lg font-medium">
                      {referral.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white">{referral.name}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Joined {referral.date} • {referral.referrals} referrals
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-blue-500 font-medium">{referral.earnings}</div>
                  <div className="text-sm text-gray-400 mt-1">Total earnings</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <button className={cn(
        'flex items-center gap-2',
        'text-sm text-primary-light',
        'hover:text-primary-light/80',
        'transition-colors duration-200',
        'group'
      )}>
        View All Referrals
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
