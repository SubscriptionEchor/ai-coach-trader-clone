import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

// Sample data structure for the referral tree
const referralData = {
  referrer: {
    name: "Alex Thompson",
    referrals: 1,
    rewards: "$250"
  },
  you: {
    name: "You",
    referrals: 124,
    rewards: "$2,450"
  },
  levels: [
    {
      level: 1,
      users: [
        { name: "John Smith", referrals: 15, rewards: "$450" },
        { name: "Sarah Wilson", referrals: 22, rewards: "$660" },
        { name: "Mike Johnson", referrals: 18, rewards: "$540" }
      ]
    },
    {
      level: 2,
      users: [
        { name: "Emma Davis", referrals: 8, rewards: "$240" },
        { name: "James Brown", referrals: 12, rewards: "$360" },
        { name: "Michael Lee", referrals: 5, rewards: "$150" }
      ]
    },
    {
      level: 3,
      count: 45,
      rewards: "$1,350"
    },
    {
      level: 4,
      count: 128,
      rewards: "$3,840"
    },
    {
      level: 5,
      count: 312,
      rewards: "$9,360"
    }
  ]
};

export function ReferralTreeView() {
  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className={cn(
          'p-2.5 rounded-lg',
          'bg-primary-light/10'
        )}>
          <Users className="w-5 h-5 text-primary-light" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Referral Network</h2>
          <p className="text-sm text-gray-400 mt-1">Your complete referral tree</p>
        </div>
      </div>

      {/* Tree Structure */}
      <div className="space-y-6">
        {/* Referrer */}
        <div className="relative flex justify-center">
          <UserNode
            user={referralData.referrer}
            type="referrer"
          />
          <div className="absolute bottom-0 left-1/2 h-6 w-px bg-gradient-to-b from-yellow-500/50 to-emerald-500/50" />
        </div>

        {/* You */}
        <div className="relative flex justify-center">
          <UserNode
            user={referralData.you}
            type="you"
          />
          <div className="absolute bottom-0 left-1/2 h-6 w-px bg-gradient-to-b from-emerald-500/50 to-blue-500/50" />
        </div>

        {/* Levels */}
        {referralData.levels.map((level, index) => (
          <div key={level.level} className="relative pl-8">
            <div className="mb-4">
              <div className={cn(
                'inline-flex items-center gap-2',
                'px-2.5 py-1 rounded-full text-xs font-medium',
                index < 2 ? 'bg-blue-500/10 text-blue-500' : 'bg-indigo-500/10 text-indigo-400'
              )}>
                Level {level.level}
                {index >= 2 && (
                  <span className="text-gray-400">
                    ({level.count} users)
                  </span>
                )}
              </div>
            </div>

            {'users' in level ? (
              <div className="space-y-4">
                {level.users.map((user, userIndex) => (
                  <UserNode
                    key={userIndex}
                    user={user}
                    type={`level${level.level}` as 'level1' | 'level2'}
                  />
                ))}
              </div>
            ) : (
              <motion.div
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
                  <div>
                    <div className="text-white font-medium">
                      {level.count} Users
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Total rewards: {level.rewards}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface UserNodeProps {
  user: {
    name: string;
    referrals: number;
    rewards: string;
  };
  type: 'referrer' | 'you' | 'level1' | 'level2';
}

function UserNode({ user, type }: UserNodeProps) {
  const colors = {
    referrer: 'yellow',
    you: 'emerald',
    level1: 'blue',
    level2: 'purple'
  };

  const color = colors[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        'relative p-4 rounded-lg',
        'bg-white/5 border border-white/10',
        'hover:border-white/20',
        'transition-all duration-300',
        'group'
      )}
    >
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
            {user.referrals} referrals • {user.rewards} earned
          </div>
        </div>
      </div>
    </motion.div>
  );
}