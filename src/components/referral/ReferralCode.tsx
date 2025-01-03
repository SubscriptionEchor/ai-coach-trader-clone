import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { ShareButton } from './ShareButton';
import { cn } from '../../lib/utils';

export function ReferralCode() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'TRADE123';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Code Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Your Referral Code</h2>
              <p className="text-gray-400">Share this code with others to earn rewards</p>
            </div>

            <div className="flex items-center gap-4">
              <div className={cn(
                'px-6 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
                'text-xl font-mono font-medium text-white',
                'tracking-wider'
              )}>
                {referralCode}
              </div>
              <button
                onClick={handleCopyCode}
                className={cn(
                  'p-3 rounded-lg',
                  'bg-white/5 hover:bg-white/10',
                  'border border-white/10 hover:border-white/20',
                  'transition-all duration-200',
                  'group'
                )}
              >
                <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Share Section */}
          <div>
            <ShareButton referralCode={referralCode} />
          </div>
        </div>

        {/* Copy Notification */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
          className={cn(
            'absolute top-0 right-0',
            'px-4 py-2 rounded-lg',
            'bg-emerald-500/10 text-emerald-500',
            'text-sm font-medium'
          )}
        >
          Copied!
        </motion.div>
      </div>
    </div>
  );
}