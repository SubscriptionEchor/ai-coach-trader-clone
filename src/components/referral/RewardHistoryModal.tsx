import React, { useState } from 'react';
import { X, ArrowDownRight, ArrowUpRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Reward {
  type: string;
  amount: string;
  date: string;
  referral: string;
  status: string;
}

interface RewardHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  rewards: Reward[];
}

export function RewardHistoryModal({ isOpen, onClose, rewards }: RewardHistoryModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredRewards = rewards.filter(reward => {
    const matchesSearch = reward.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         reward.referral.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || reward.type.toLowerCase().includes(selectedType);
    return matchesSearch && matchesType;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              'fixed top-[5%] left-1/2 -translate-x-1/2',
              'w-full max-w-4xl max-h-[90vh]',
              'bg-[#1d1d1d] rounded-xl',
              'border border-white/10',
              'overflow-hidden',
              'z-50'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white">Reward History</h2>
              <button
                onClick={onClose}
                className={cn(
                  'p-2 rounded-lg',
                  'hover:bg-white/5',
                  'transition-colors'
                )}
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Search and Filters */}
            <div className="p-6 border-b border-white/10">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by type or referral..."
                    className={cn(
                      'w-full pl-10 pr-4 py-2 rounded-lg',
                      'bg-white/5 border border-white/10',
                      'text-white placeholder-gray-400',
                      'focus:outline-none focus:border-primary-light/30',
                      'transition-colors'
                    )}
                  />
                </div>

                {/* Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className={cn(
                    'px-4 py-2 rounded-lg',
                    'bg-white/5 border border-white/10',
                    'text-white',
                    'focus:outline-none focus:border-primary-light/30',
                    'transition-colors'
                  )}
                >
                  <option value="all">All Types</option>
                  <option value="level 1">Level 1</option>
                  <option value="level 2">Level 2</option>
                  <option value="bonus">Bonus</option>
                </select>
              </div>
            </div>

            {/* Transaction List */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="p-6 space-y-4">
                {filteredRewards.map((reward, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
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

                {filteredRewards.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    No rewards found matching your criteria.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}