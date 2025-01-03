
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewToggle } from './views/ViewToggle';
import { ReferralStats } from './ReferralStats';
import { ReferralCode } from './ReferralCode';
import { ReferralTreeView } from './ReferralTreeView';
import { ReferralListView } from './views/ReferralListView';
import { ReferralRewards } from './ReferralRewards';
import { cn } from '../../lib/utils';

export function ReferralOverview() {
  const [view, setView] = useState<'list' | 'tree'>('list');

  return (
    <div className="space-y-8">
      {/* Header with View Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-2">
            Referral Program
          </h1>
          <p className="text-gray-400">
            Earn rewards by inviting other traders to join our platform
          </p>
        </div>
        <ViewToggle view={view} onViewChange={setView} />
      </div>

      {/* Stats Overview */}
      <ReferralStats />

      {/* Referral Code Section */}
      <ReferralCode />

      {/* Network View */}
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
          <AnimatePresence mode="wait">
            {view === 'tree' ? (
              <motion.div
                key="tree"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ReferralTreeView />
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ReferralListView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Rewards History */}
      <ReferralRewards />
    </div>
  );
}
