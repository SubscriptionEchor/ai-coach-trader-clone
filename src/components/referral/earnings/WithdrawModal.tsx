
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wallet, AlertTriangle, ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableBalance: number;
}

export function WithdrawModal({ isOpen, onClose, availableBalance }: WithdrawModalProps) {
  const [amount, setAmount] = useState('');
  const [chain, setChain] = useState('TRC20');
  const [address, setAddress] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const chains = [
    { id: 'TRC20', name: 'USDT TRC20', icon: '💎' },
    { id: 'ERC20', name: 'USDT ERC20', icon: '⚡' },
    { id: 'BSC', name: 'USDT BSC', icon: '🌟' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onClose();
    } catch (error) {
      console.error('Withdrawal failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                'w-full max-w-md',
                'bg-[#1d1d1d] rounded-xl',
                'border border-white/10',
                'p-6'
              )}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={cn(
                  'absolute top-4 right-4',
                  'p-2 rounded-lg',
                  'hover:bg-white/5',
                  'transition-colors'
                )}
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              {/* Content */}
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={cn(
                    'p-2.5 rounded-lg',
                    'bg-primary-light/10'
                  )}>
                    <Wallet className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Withdraw Funds</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Available Balance: ${availableBalance.toFixed(2)}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Amount (USDT)
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      min="50"
                      max={availableBalance}
                      step="0.01"
                      className={cn(
                        'w-full px-4 py-3 rounded-lg',
                        'bg-white/5 border border-white/10',
                        'text-white placeholder-gray-500',
                        'focus:outline-none focus:border-primary-light/30',
                        'transition-colors'
                      )}
                      required
                    />
                  </div>

                  {/* Chain Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Select Chain
                    </label>
                    <div className="relative">
                      <select
                        value={chain}
                        onChange={(e) => setChain(e.target.value)}
                        className={cn(
                          'w-full px-4 py-3 rounded-lg appearance-none',
                          'bg-white/5 border border-white/10',
                          'text-white',
                          'focus:outline-none focus:border-primary-light/30',
                          'transition-colors'
                        )}
                      >
                        {chains.map((chain) => (
                          <option key={chain.id} value={chain.id}>
                            {chain.icon} {chain.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Wallet Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter wallet address"
                      className={cn(
                        'w-full px-4 py-3 rounded-lg',
                        'bg-white/5 border border-white/10',
                        'text-white placeholder-gray-500',
                        'focus:outline-none focus:border-primary-light/30',
                        'transition-colors'
                      )}
                      required
                    />
                  </div>

                  {/* Warning */}
                  <div className={cn(
                    'p-3 rounded-lg',
                    'bg-yellow-500/10 border border-yellow-500/20',
                    'flex items-start gap-3'
                  )}>
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-500">
                      Please ensure you've selected the correct chain and entered the correct wallet address. Withdrawals cannot be reversed.
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={cn(
                      'w-full flex items-center justify-center gap-2',
                      'px-6 py-3 rounded-lg',
                      'bg-primary-light hover:bg-primary-light/90',
                      'text-black font-medium',
                      'transition-all duration-200',
                      'disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Wallet className="w-5 h-5" />
                        Withdraw Funds
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
