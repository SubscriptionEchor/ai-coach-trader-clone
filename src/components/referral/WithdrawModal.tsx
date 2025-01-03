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

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={cn(
                'w-full max-w-md',
                'bg-[#1d1d1d] rounded-xl',
                'border border-white/10',
                'p-6',
                'relative'
              )}
            >
              {/* Rest of the modal content remains the same */}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}