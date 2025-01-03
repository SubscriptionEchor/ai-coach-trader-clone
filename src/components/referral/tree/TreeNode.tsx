import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, User } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { TreeNodeProps } from './types';
import { TreeNodeConnector } from './TreeNodeConnector';

export function TreeNode({ node, isRoot = false }: TreeNodeProps) {
  // Helper function to get level-specific styles
  const getLevelStyles = (level: number) => {
    const styles = {
      1: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', label: 'Referrer' },
      2: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', label: 'Your Referrals' },
      3: { bg: 'bg-blue-500/10', text: 'text-blue-500', label: 'Second Tier' },
      4: { bg: 'bg-purple-500/10', text: 'text-purple-500', label: 'Third Tier' },
      5: { bg: 'bg-pink-500/10', text: 'text-pink-500', label: 'Fourth Tier' }
    };
    return styles[level as keyof typeof styles];
  };

  const levelStyle = getLevelStyles(node.level);
  const isUserNode = node.level === 2; // Level 2 is where "You" are in the tree

  return (
    <div className="relative flex flex-col items-center">
      {/* Node Box */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'p-4 rounded-xl',
          'bg-[#1d1d1d] border border-white/10',
          'hover:border-white/20',
          'transition-all duration-300',
          'shadow-lg',
          'min-w-[300px]',
          isUserNode && 'ring-2 ring-primary-light/30'
        )}
      >
        {/* Level Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={cn(
              'px-2.5 py-1 rounded-full text-xs font-medium',
              levelStyle.bg,
              levelStyle.text
            )}>
              {levelStyle.label}
            </div>
            {node.level > 3 ? (
              <span className="text-sm text-gray-400">
                ({node.totalReferrals} total referrals)
              </span>
            ) : (
              <span className="text-sm text-gray-400">
                ({node.users.length} referrals)
              </span>
            )}
          </div>

          {/* "You" Badge */}
          {isUserNode && (
            <div className={cn(
              'flex items-center gap-1.5',
              'px-2.5 py-1 rounded-full',
              'bg-primary-light/10',
              'text-primary-light text-xs font-medium'
            )}>
              <User className="w-3 h-3" />
              You
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className={cn(
            'p-3 rounded-lg',
            'bg-white/5 border border-white/10'
          )}>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <Users className="w-4 h-4" />
              Total Referrals
            </div>
            <div className="text-white font-medium">
              {node.totalReferrals}
            </div>
          </div>
          
          <div className={cn(
            'p-3 rounded-lg',
            'bg-white/5 border border-white/10'
          )}>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              Total Earnings
            </div>
            <div className="text-emerald-500 font-medium">
              {node.totalEarnings}
            </div>
          </div>
        </div>

        {/* Users List - Only show for levels 1-3 */}
        {node.level <= 3 && node.users.length > 0 && (
          <div className="space-y-2">
            {node.users.map(user => (
              <div
                key={user.id}
                className={cn(
                  'p-3 rounded-lg',
                  'bg-white/5 border border-white/10',
                  'hover:border-white/20',
                  'transition-all duration-300'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light/10 flex items-center justify-center">
                      <span className="text-primary-light font-medium">
                        {user.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-500 font-medium">{user.earnings}</div>
                    <div className="text-sm text-gray-400">{user.referrals} referrals</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Children Section */}
      {node.children && node.children.length > 0 && (
        <>
          <TreeNodeConnector />
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-px bg-white/10" />
            <div className="flex gap-16 pt-2">
              {node.children.map((child) => (
                <div key={child.id} className="relative">
                  <div className="absolute top-0 left-1/2 w-px h-8 -translate-x-1/2 bg-white/10" />
                  <TreeNode node={child} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}