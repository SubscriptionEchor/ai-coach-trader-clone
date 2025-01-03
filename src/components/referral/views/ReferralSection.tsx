import React from 'react';
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ReferralSectionProps {
  title: string;
  user?: {
    name: string;
    date: string;
    earnings: string;
    referrals: number;
  };
  users?: Array<{
    name: string;
    date: string;
    earnings: string;
    referrals: number;
  }>;
  totalUsers?: number;
  totalEarnings?: string;
  variant: 'referrer' | 'user' | 'level';
}

export function ReferralSection({
  title,
  user,
  users = [],
  totalUsers,
  totalEarnings,
  variant
}: ReferralSectionProps) {
  const colors = {
    referrer: 'yellow',
    user: 'emerald',
    level: 'blue'
  };

  const color = colors[variant];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">{title}</h3>

      {/* Single User Display */}
      {user && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            'p-4 rounded-lg',
            'bg-white/5 border border-white/10',
            'hover:border-white/20',
            'transition-all duration-300'
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={cn(
                'w-12 h-12 rounded-full',
                `bg-${color}-500/10`,
                'flex items-center justify-center'
              )}>
                <User className={`w-6 h-6 text-${color}-500`} />
              </div>
              <div>
                <div className="font-medium text-white">{user.name}</div>
                <div className="text-sm text-gray-400 mt-1">
                  Joined {user.date} • {user.referrals} referrals
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-${color}-500 font-medium`}>{user.earnings}</div>
              <div className="text-sm text-gray-400 mt-1">Total earnings</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Multiple Users Display */}
      {users.length > 0 && (
        <div className="space-y-4">
          {users.map((user, index) => (
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    'w-12 h-12 rounded-full',
                    `bg-${color}-500/10`,
                    'flex items-center justify-center'
                  )}>
                    <span className={`text-${color}-500 text-lg font-medium`}>
                      {user.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white">{user.name}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Joined {user.date} • {user.referrals} referrals
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-${color}-500 font-medium`}>{user.earnings}</div>
                  <div className="text-sm text-gray-400 mt-1">Total earnings</div>
                </div>
              </div>
            </motion.div>
          ))}

          {totalUsers && totalUsers > users.length && (
            <div className={cn(
              'p-4 rounded-lg',
              'bg-white/5 border border-white/10',
              'text-center'
            )}>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>+{totalUsers - users.length} more referrals</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}