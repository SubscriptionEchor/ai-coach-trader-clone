import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import LogoWhite from '../../assets/svg/white-logo.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Telegram from '../../assets/svg/telegram.svg';
import Discord from '../../assets/svg/discord.svg';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralCode: string;
}

export function ShareModal({ isOpen, onClose, referralCode }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}/signup?ref=${referralCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string) => {
    const text = "Join me on the best AI-powered trading platform!";
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`,
      discord: `https://discord.com/channels/@me?content=${encodeURIComponent(text + ' ' + shareUrl)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank');
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
              <div className="text-center">
                {/* Logo */}
                <img 
                  src={LogoWhite} 
                  alt="Logo" 
                  className="h-8 mx-auto mb-6"
                />

                <h3 className="text-xl font-semibold mb-2">
                  Share Your Referral Link
                </h3>
                <p className="text-gray-400 mb-6">
                  Share this link with others to earn rewards
                </p>

                {/* Link Input */}
                <div className="flex items-center gap-2 mb-8">
                  <div className={cn(
                    'flex-1 px-4 py-3 rounded-lg',
                    'bg-white/5 border border-white/10',
                    'text-white'
                  )}>
                    <code className="text-sm break-all">{shareUrl}</code>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={cn(
                      'p-3 rounded-lg',
                      'bg-white/5 hover:bg-white/10',
                      'border border-white/10',
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

                {/* Social Share Buttons */}
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleShare('twitter')}
                    className={cn(
                      'p-3 rounded-lg',
                      'bg-white/5 hover:bg-white/10',
                      'border border-white/10',
                      'transition-all duration-200',
                      'hover:scale-105'
                    )}
                  >
                    <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => handleShare('telegram')}
                    className={cn(
                      'p-3 rounded-lg',
                      'bg-white/5 hover:bg-white/10',
                      'border border-white/10',
                      'transition-all duration-200',
                      'hover:scale-105'
                    )}
                  >
                    <img src={Telegram} alt="Telegram" className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => handleShare('discord')}
                    className={cn(
                      'p-3 rounded-lg',
                      'bg-white/5 hover:bg-white/10',
                      'border border-white/10',
                      'transition-all duration-200',
                      'hover:scale-105'
                    )}
                  >
                    <img src={Discord} alt="Discord" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}