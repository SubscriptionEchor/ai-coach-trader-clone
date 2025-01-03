
import React from 'react';
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface NetworkNodeProps {
  user?: {
    name: string;
    date: string;
    earnings: string;
    referrals: number;
  };
  summary?: {
    level: number;
    totalUsers: number;
    totalEarnings: string;
  };
  variant: 'referrer' | 'user' | 'level1' | 'level2' | 'summary';
}

export function NetworkNode({ user, summary, variant }: NetworkNodeProps) {
  const colors = {
    referrer: 'yellow',
    user: 'emerald',
    level1: 'blue',
    level2: 'purple',
    summary: 'primary'
  };

  const color = colors[variant];

  if (summary) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'p-3 rounded-xl w-32', // Reduced width and padding
          'bg-white/5 border border-white/10',
          'hover:border-white/20',
          'transition-all duration-300'
        )}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className={cn(
            'p-1.5 rounded-lg',
            'bg-primary-light/10'
          )}>
            <Users className="w-4 h-4 text-primary-light" />
          </div>
          <h4 className="font-medium text-white text-xs">Level {summary.level}</h4>
        </div>

        <div className="space-y-1">
          <div>
            <div className="text-xs text-gray-400">Total Referrals</div>
            <div className="text-sm font-medium text-white">{summary.totalUsers}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Total Earnings</div>
            <div className="text-sm font-medium text-emerald-500">{summary.totalEarnings}</div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'p-3 rounded-xl w-32', // Reduced width and padding
        'bg-white/5 border border-white/10',
        'hover:border-white/20',
        'transition-all duration-300'
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className={cn(
          'w-8 h-8 rounded-full mb-2', // Reduced size
          `bg-${color}-500/10`,
          'flex items-center justify-center'
        )}>
          {variant === 'user' ? (
            <User className={`w-4 h-4 text-${color}-500`} />
          ) : (
            <span className={`text-${color}-500 text-sm font-medium`}>
              {user.name[0]}
            </span>
          )}
        </div>
        <div className="font-medium text-white text-xs mb-1">{user.name}</div>
        <div className="text-xs text-gray-400 mb-1">
          {user.referrals} referrals
        </div>
        <div className={`text-${color}-500 font-medium text-xs`}>
          {user.earnings}
        </div>
      </div>
    </motion.div>
  );
}
