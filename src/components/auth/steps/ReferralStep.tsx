import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ReferralStepProps {
  onComplete: () => void;
}

export function ReferralStep({ onComplete }: ReferralStepProps) {
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (referralCode === 'DEMO123') {
        onComplete();
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
      className="text-center"
    >
      {/* Header Section */}
      <div className="mb-12">
        <motion.div 
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full',
            'bg-primary-light/10 text-primary-light',
            'mb-8'
          )}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Exclusive Access</span>
        </motion.div>

        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Enter Your Referral Code
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Join our exclusive community of traders
        </motion.p>
      </div>

      {/* Code Input Section */}
      <motion.form 
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto space-y-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative">
          <div className={cn(
            'absolute inset-0 -m-1',
            'bg-gradient-to-r from-primary-light via-cyan-500 to-primary-light',
            'rounded-lg opacity-20 blur-sm',
            'animate-pulse'
          )} />
          
          <input
            type="text"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
            placeholder="Enter referral code"
            className={cn(
              'w-full px-6 py-4 rounded-lg',
              'bg-white/5 backdrop-blur-sm',
              'border border-white/10',
              'text-center text-xl tracking-[0.2em] font-medium',
              'text-white placeholder-gray-500',
              'focus:outline-none focus:border-primary-light/30',
              'transition-colors duration-200',
              error && 'border-red-500/50'
            )}
            maxLength={10}
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm"
          >
            {error}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            type="submit"
            disabled={isVerifying}
            className={cn(
              'w-full px-6 py-4 rounded-lg',
              'bg-gradient-primary',
              'text-white font-medium',
              'transition-all duration-200',
              'hover:opacity-90',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'group'
            )}
          >
            {isVerifying ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Verifying...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5" />
                <span>Verify Code</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-gray-400"
        >
          For testing, use: <span className="text-primary-light font-medium">DEMO123</span>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}