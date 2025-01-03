
import React from 'react';
import { motion } from 'framer-motion';
import { History, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

const transactions = [
  {
    type: 'withdrawal',
    amount: '-$1,200.00',
    date: '2024-02-10',
    status: 'completed',
    chain: 'TRC20',
    address: '0x1234...5678'
  },
  {
    type: 'earning',
    amount: '+$450.00',
    date: '2024-02-09',
    from: 'John Smith',
    level: 1
  },
  {
    type: 'earning',
    amount: '+$225.00',
    date: '2024-02-08',
    from: 'Sarah Wilson',
    level: 2
  },
  {
    type: 'withdrawal',
    amount: '-$800.00',
    date: '2024-02-07',
    status: 'completed',
    chain: 'BSC',
    address: '0x9876...4321'
  }
];

export function EarningsHistory() {
  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={cn(
          'p-2.5 rounded-lg',
          'bg-primary-light/10'
        )}>
          <History className="w-5 h-5 text-primary-light" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Transaction History</h3>
          <p className="text-sm text-gray-400 mt-1">
            Recent earnings and withdrawals
          </p>
        </div>
      </div>

      {/* Transactions List */}
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
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
                  'p-2 rounded-lg',
                  transaction.type === 'withdrawal' 
                    ? 'bg-red-500/10' 
                    : 'bg-emerald-500/10'
                )}>
                  {transaction.type === 'withdrawal' ? (
                    <ArrowUpRight className="w-4 h-4 text-red-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-emerald-500" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-white">
                    {transaction.type === 'withdrawal' ? 'Withdrawal' : `Level ${transaction.level} Earning`}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {transaction.type === 'withdrawal' 
                      ? `${transaction.chain} • ${transaction.address}`
                      : `From: ${transaction.from}`
                    }
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={cn(
                  'font-medium',
                  transaction.type === 'withdrawal' 
                    ? 'text-red-500' 
                    : 'text-emerald-500'
                )}>
                  {transaction.amount}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {transaction.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
