import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { TelegramUsernameInput } from './TelegramUsernameInput';
import { TelegramWarning } from './TelegramWarning';
import { TelegramInstructions } from './TelegramInstructions';
import { TelegramChannelJoin } from './TelegramChannelJoin';

interface TelegramConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (username: string) => void;
}

export function TelegramConnectModal({ 
  isOpen, 
  onClose,
  onConnect 
}: TelegramConnectModalProps) {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showChannelJoin, setShowChannelJoin] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter your Telegram username');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowChannelJoin(true);
    } catch (err) {
      setError('Failed to validate username. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChannelJoined = async () => {
    try {
      await onConnect(username);
      onClose();
    } catch (err) {
      setError('Failed to complete connection. Please try again.');
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
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className={cn(
                  'w-full max-w-md',
                  'max-h-[90vh] overflow-y-auto',
                  'bg-[#1d1d1d] rounded-xl',
                  'border border-white/10',
                  'p-6',
                  'relative'
                )}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'p-2.5 rounded-lg',
                      'bg-[#0088cc]/10'
                    )}>
                      <Send className="w-5 h-5 text-[#0088cc]" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      {showChannelJoin ? 'Join Our Channel' : 'Connect Telegram'}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className={cn(
                      'p-2 rounded-lg',
                      'hover:bg-white/5',
                      'transition-colors'
                    )}
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                  {showChannelJoin ? (
                    <TelegramChannelJoin
                      username={username}
                      onChannelJoined={handleChannelJoined}
                    />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <TelegramWarning />
                      <TelegramInstructions />

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <TelegramUsernameInput
                          value={username}
                          onChange={setUsername}
                          error={error}
                        />

                        <button
                          type="submit"
                          disabled={isLoading}
                          className={cn(
                            'w-full flex items-center justify-center gap-2',
                            'px-6 py-3 rounded-lg',
                            'bg-[#0088cc] hover:bg-[#0088cc]/90',
                            'text-white font-medium',
                            'transition-all duration-200',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            'group'
                          )}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Validating...</span>
                            </div>
                          ) : (
                            <>
                              Continue
                              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}