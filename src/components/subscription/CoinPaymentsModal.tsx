
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Timer } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CoinPaymentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  plan?: {
    name: string;
    price: string;
    period: string;
  };
}

export function CoinPaymentsModal({ isOpen, onClose, onSuccess, plan }: CoinPaymentsModalProps) {
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Mock USDT TRC20 address
  const paymentAddress = "TW6qtPk4fR4qDHVp7ZyJUWpN1i4qkqj2Xz";
  const usdtAmount = plan?.price || "0";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(paymentAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const simulatePayment = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    onSuccess();
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
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                'w-full max-w-md',
                'bg-[#1d1d1d] rounded-2xl',
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
              <div className="text-center">
                {/* USDT Logo */}
                <div className="flex justify-center mb-6">
                  <img 
                    src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                    alt="USDT"
                    className="w-16 h-16"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  Complete Payment
                </h3>

                {/* Payment Details */}
                <div className={cn(
                  'p-4 rounded-xl mb-6',
                  'bg-white/5 border border-white/10'
                )}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-xl font-semibold text-white">{usdtAmount} USDT</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Network:</span>
                    <span className="text-white">TRC20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Validity:</span>
                    <div className="flex items-center gap-2 text-white">
                      <Timer className="w-4 h-4" />
                      <span>30 minutes</span>
                    </div>
                  </div>
                </div>

                {/* Payment Address */}
                <div className="text-left mb-2">
                  <label className="text-sm text-gray-400">Send USDT to this address:</label>
                </div>
                <div className={cn(
                  'flex items-center gap-2 p-3 rounded-lg mb-6',
                  'bg-white/5 border border-white/10'
                )}>
                  <code className="flex-1 text-sm text-gray-300 font-mono break-all">
                    {paymentAddress}
                  </code>
                  <button
                    onClick={handleCopyAddress}
                    className={cn(
                      'p-2 rounded-lg',
                      'hover:bg-white/5',
                      'transition-colors'
                    )}
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Warning */}
                <div className={cn(
                  'p-3 rounded-lg mb-6',
                  'bg-yellow-500/10 border border-yellow-500/20',
                  'text-sm text-yellow-500 text-left'
                )}>
                  Please make sure to send USDT on the TRC20 network only. Other networks may result in lost funds.
                </div>

                {/* Demo Button */}
                <button
                  onClick={simulatePayment}
                  disabled={isProcessing}
                  className={cn(
                    'w-full flex items-center justify-center gap-2',
                    'px-6 py-3 rounded-xl',
                    'bg-[#26A17B] hover:bg-[#26A17B]/90',
                    'text-white font-medium',
                    'transition-all duration-300',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Simulate Payment (Demo)'
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
