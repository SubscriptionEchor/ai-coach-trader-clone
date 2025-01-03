import React, { useState } from 'react';
import { X, Wallet, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableBalance: number;
}

export function WithdrawModal({ isOpen, onClose, availableBalance }: WithdrawModalProps) {
  const [amount, setAmount] = useState('');
  const [withdrawalMethod, setWithdrawalMethod] = useState('bank');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onClose();
    } catch (error) {
      console.error('Withdrawal failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
              'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              'w-full max-w-md p-6',
              'bg-[#1d1d1d] rounded-xl',
              'border border-white/10',
              'z-50'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={cn(
                  'p-2.5 rounded-lg',
                  'bg-emerald-500/10'
                )}>
                  <Wallet className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-xl font-semibold text-white">Withdraw Funds</h2>
              </div>
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

            {/* Content */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Available Balance */}
              <div className={cn(
                'p-4 rounded-lg',
                'bg-white/5 border border-white/10'
              )}>
                <div className="text-sm text-gray-400">Available Balance</div>
                <div className="text-2xl font-semibold text-white mt-1">
                  ${availableBalance.toFixed(2)}
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Withdrawal Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className={cn(
                      'w-full pl-8 pr-4 py-3 rounded-lg',
                      'bg-white/5 border border-white/10',
                      'text-white placeholder-gray-500',
                      'focus:outline-none focus:border-emerald-500/30',
                      'transition-colors'
                    )}
                    min="0"
                    max={availableBalance}
                    step="0.01"
                    required
                  />
                </div>
              </div>

              {/* Withdrawal Method */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Withdrawal Method
                </label>
                <select
                  value={withdrawalMethod}
                  onChange={(e) => setWithdrawalMethod(e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg',
                    'bg-white/5 border border-white/10',
                    'text-white',
                    'focus:outline-none focus:border-emerald-500/30',
                    'transition-colors'
                  )}
                >
                  <option value="bank">Bank Transfer</option>
                  <option value="crypto">Cryptocurrency</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              {/* Warning */}
              <div className={cn(
                'flex items-start gap-3 p-4 rounded-lg',
                'bg-yellow-500/10 border border-yellow-500/20',
                'text-sm text-yellow-500'
              )}>
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  Withdrawals are processed within 24-48 hours. Minimum withdrawal amount is $50.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !amount || Number(amount) > availableBalance}
                className={cn(
                  'w-full px-6 py-3 rounded-lg',
                  'bg-emerald-500 hover:bg-emerald-600',
                  'text-white font-medium',
                  'transition-colors',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'relative'
                )}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Withdraw Funds'
                )}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}