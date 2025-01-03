import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { NetworkNode } from './NetworkNode';
import { cn } from '../../../lib/utils';

interface NetworkLevelProps {
  title: string;
  users: Array<{
    name: string;
    date: string;
    earnings: string;
    referrals: number;
  }>;
  totalUsers?: number;
  totalEarnings?: string;
  variant: string;
  showSummary?: boolean;
}

export function NetworkLevel({
  title,
  users,
  totalUsers,
  totalEarnings,
  variant,
  showSummary
}: NetworkLevelProps) {
  const remainingUsers = totalUsers ? totalUsers - users.length : 0;

  return (
    <div className="relative">
      {/* Level Title */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        {totalUsers && (
          <p className="text-sm text-gray-400 mt-1">
            {totalUsers} total referrals • {totalEarnings} earned
          </p>
        )}
      </div>

      {/* Network Line */}
      <div className={cn(
        'absolute left-1/2 -top-12 -translate-x-1/2',
        'w-px h-8',
        'bg-gradient-to-b from-primary-light/30 to-primary-light/10'
      )} />

      {/* Users Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {users.map((user, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NetworkNode
              user={user}
              variant={variant}
            />
          </motion.div>
        ))}

        {/* Summary Node */}
        {remainingUsers > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: users.length * 0.1 }}
            className={cn(
              'p-4 rounded-xl w-48',
              'bg-white/5 border border-white/10',
              'hover:border-white/20',
              'transition-all duration-300',
              'text-center'
            )}
          >
            <div className="flex flex-col items-center gap-2">
              <div className={cn(
                'p-3 rounded-lg',
                'bg-primary-light/10'
              )}>
                <Users className="w-5 h-5 text-primary-light" />
              </div>
              <div className="text-gray-400">
                +{remainingUsers} more referrals
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}