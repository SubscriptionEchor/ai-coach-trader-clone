import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { cn } from '../../lib/utils';
import { TelegramVerification } from './TelegramVerification';
import { TelegramSuccess } from './TelegramSuccess';

interface TelegramConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TelegramConnectModal({ isOpen, onClose }: TelegramConnectModalProps) {
  const [username, setUsername] = useState('');
  const [step, setStep] = useState<'initial' | 'verification' | 'success'>('initial');

  const handleConnect = () => {
    window.open('https://t.me/your_bot', '_blank');
    setStep('verification');
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
            {step === 'initial' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Connect Telegram</h3>
                  <p className="text-gray-400">
                    Link your Telegram account to receive real-time trading signals
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Telegram Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value.trim())}
                      placeholder="@username"
                      className={cn(
                        'w-full px-4 py-3 rounded-lg',
                        'bg-white/5 border border-white/10',
                        'text-white placeholder-gray-500',
                        'focus:outline-none focus:border-[#0088cc]/30',
                        'transition-colors'
                      )}
                    />
                  </div>

                  <button
                    onClick={handleConnect}
                    disabled={!username}
                    className={cn(
                      'flex items-center justify-center gap-2',
                      'w-full px-6 py-3 rounded-lg',
                      'bg-[#0088cc] hover:bg-[#0088cc]/90',
                      'text-white font-medium',
                      'transition-all duration-200',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                      'group'
                    )}
                  >
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    Connect Telegram
                  </button>
                </div>
              </div>
            )}

            {step === 'verification' && (
              <TelegramVerification 
                username={username}
                onSuccess={() => setStep('success')}
              />
            )}

            {step === 'success' && (
              <TelegramSuccess 
                username={username}
                onClose={onClose}
              />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}