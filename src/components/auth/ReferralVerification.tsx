import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ReferralVerificationProps {
  onVerified: () => void;
}

export function ReferralVerification({ onVerified }: ReferralVerificationProps) {
  // Pre-populate with demo code for testing
  const [referralCode, setReferralCode] = useState('DEMO123');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referralCode.trim()) {
      setError('Please enter a referral code');
      return;
    }

    setIsVerifying(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, accept DEMO123 as valid code
      if (referralCode === 'DEMO123') {
        onVerified();
      } else {
        setError('Invalid referral code');
      }
    } catch (err) {
      setError('Failed to verify referral code');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto text-center"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light/10 mb-6">
        <Check className="w-8 h-8 text-primary-light" />
      </div>

      {/* Title & Description */}
      <h1 className="text-3xl font-bold mb-4">
        Enter Referral Code
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        Please enter your referral code to continue. For testing, use: <span className="text-primary-light font-medium">DEMO123</span>
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
            placeholder="Enter your referral code"
            className={cn(
              'w-full px-4 py-3 rounded-lg text-center uppercase tracking-widest',
              'bg-white/5 border border-white/10',
              'text-white placeholder-gray-400',
              'focus:outline-none focus:border-primary-light/30',
              'transition-colors duration-200',
              error && 'border-red-500/50'
            )}
            maxLength={10}
          />
          {error && (
            <div className="flex items-center justify-center gap-2 mt-2 text-red-500">
              <X className="w-4 h-4" />
              <p className="text-sm">{error}</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isVerifying}
          className={cn(
            'w-full px-6 py-3 rounded-lg',
            'bg-gradient-primary',
            'text-white font-medium',
            'transition-all duration-200',
            'hover:opacity-90',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          {isVerifying ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          ) : (
            'Verify Code'
          )}
        </button>

        <p className="text-sm text-gray-400">
          Don't have a referral code?{' '}
          <a 
            href="https://t.me/your_channel" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:text-primary-light/80"
          >
            Join our Telegram
          </a>
          {' '}to request one.
        </p>
      </form>
    </motion.div>
  );
}