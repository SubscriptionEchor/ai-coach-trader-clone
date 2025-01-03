
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, Shield, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ReferralCodeFormProps {
  onSuccess: () => void;
}

export function ReferralCodeForm({ onSuccess }: ReferralCodeFormProps) {
  const [referralCode, setReferralCode] = useState('');
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
      onSuccess();
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
      className="max-w-md mx-auto"
    >
      {/* Premium Features Section */}
      <div className="mb-8 space-y-4">
        {[
          { icon: Lock, text: "Exclusive Access to Premium Signals" },
          { icon: Shield, text: "Advanced Risk Management Tools" },
          { icon: Sparkles, text: "Real-time Market Analysis" }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'flex items-center gap-3 p-3 rounded-xl',
              'bg-white/[0.03] border border-white/[0.05]',
              'hover:border-white/[0.08]',
              'transition-colors duration-300'
            )}
          >
            <div className={cn(
              'p-2 rounded-lg',
              'bg-primary-light/10',
              'text-primary-light'
            )}>
              <feature.icon className="w-4 h-4" />
            </div>
            <span className="text-gray-300">{feature.text}</span>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Code Input */}
        <div>
          <div className="relative group">
            {/* Gradient Border Effect */}
            <div className={cn(
              'absolute -inset-0.5 rounded-xl opacity-75',
              'bg-gradient-to-r from-primary-light/50 via-primary-light/25 to-primary-light/50',
              'blur-sm group-hover:opacity-100',
              'transition-opacity duration-300'
            )} />
            
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
              placeholder="Enter referral code"
              className={cn(
                'relative w-full px-6 py-4 rounded-xl',
                'bg-black/50 backdrop-blur-sm',
                'border border-white/10',
                'text-center text-2xl tracking-[0.2em] font-medium',
                'text-white placeholder-gray-500',
                'focus:outline-none',
                'transition-all duration-300',
                error && 'border-red-500/50',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
              disabled={isVerifying}
              maxLength={10}
            />
          </div>
          
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 text-center"
            >
              {error}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isVerifying}
          className={cn(
            'relative w-full group',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          {/* Button Gradient Background */}
          <div className={cn(
            'absolute inset-0 rounded-xl',
            'bg-gradient-primary opacity-90',
            'group-hover:opacity-100',
            'transition-opacity duration-300'
          )} />
          
          <div className={cn(
            'relative flex items-center justify-center gap-2',
            'px-6 py-4 rounded-xl',
            'text-white font-medium'
          )}>
            {isVerifying ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <Check className="w-5 h-5" />
                <span>Verify Code</span>
              </>
            )}
          </div>
        </button>

        {/* Demo Code Hint */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-400">
            For testing, use:
          </p>
          <div className={cn(
            'inline-block px-4 py-2 rounded-lg',
            'bg-primary-light/10',
            'text-primary-light font-mono'
          )}>
            DEMO123
          </div>
        </div>
      </form>
    </motion.div>
  );
}
