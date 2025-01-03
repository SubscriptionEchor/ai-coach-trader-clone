import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BecomeAffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => Promise<void>;
}

export function BecomeAffiliateModal({ isOpen, onClose, onSubmit }: BecomeAffiliateModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit(email);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              'relative w-full max-w-md p-6 mx-4',
              'bg-[#1d1d1d] rounded-xl',
              'border border-white/10'
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
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Become an Affiliate
              </h2>
              <p className="text-gray-400">
                Enter your email to start the application process
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={cn(
                    'w-full px-4 py-3 rounded-lg',
                    'bg-white/5 border border-white/10',
                    'text-white placeholder-gray-500',
                    'focus:outline-none focus:border-primary-light/30',
                    'transition-colors'
                  )}
                />
                {error && (
                  <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  'flex items-center justify-center gap-2',
                  'w-full px-6 py-3 rounded-lg',
                  'bg-primary-light hover:bg-primary-light/90',
                  'text-black font-medium',
                  'transition-all duration-200',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'group'
                )}
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}