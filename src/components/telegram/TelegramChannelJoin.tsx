
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TelegramChannelJoinProps {
  username: string;
  onComplete: () => void;
}

export function TelegramChannelJoin({ username, onComplete }: TelegramChannelJoinProps) {
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinChannel = () => {
    window.open('https://t.me/your_channel', '_blank');
  };

  const handleConfirmJoin = async () => {
    setIsJoining(true);
    try {
      // Simulate API verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      onComplete();
    } catch (error) {
      console.error('Failed to verify:', error);
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className={cn(
        'p-8 rounded-xl',
        'bg-[#1d1d1d] border border-white/5',
        'relative overflow-hidden'
      )}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Join Our Channel
            </h2>
            <p className="text-gray-400">
              Complete the connection process by joining our Telegram channel
            </p>
          </div>

          {/* Username Display */}
          <div className={cn(
            'p-4 rounded-lg mb-8',
            'bg-white/5 border border-white/10'
          )}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0088cc]/10 flex items-center justify-center">
                <span className="text-[#0088cc] font-medium">
                  {username[0].toUpperCase()}
                </span>
              </div>
              <div>
                <div className="font-medium text-white">@{username}</div>
                <div className="text-sm text-gray-400">Telegram Username</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={handleJoinChannel}
              className={cn(
                'flex items-center justify-center gap-2',
                'w-full px-6 py-3 rounded-lg',
                'bg-[#0088cc] hover:bg-[#0088cc]/90',
                'text-white font-medium',
                'transition-all duration-200',
                'group'
              )}
            >
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              Join Telegram Channel
            </button>

            <button
              onClick={handleConfirmJoin}
              disabled={isJoining}
              className={cn(
                'flex items-center justify-center gap-2',
                'w-full px-6 py-3 rounded-lg',
                'bg-white/5 hover:bg-white/10',
                'border border-white/10 hover:border-white/20',
                'text-gray-400 hover:text-white',
                'transition-all duration-200',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'group'
              )}
            >
              {isJoining ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Verifying...</span>
                </div>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  I've Joined the Channel
                </>
              )}
            </button>
          </div>

          <p className="text-sm text-gray-400 text-center mt-6">
            After joining, click the button above to complete the connection process
          </p>
        </div>
      </div>
    </div>
  );
}
