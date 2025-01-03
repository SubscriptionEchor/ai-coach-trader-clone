import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

interface TelegramChannelJoinProps {
  username: string;
  onChannelJoined: () => void;
}

export function TelegramChannelJoin({ username, onChannelJoined }: TelegramChannelJoinProps) {
  const [isJoining, setIsJoining] = useState(false);
  const channelLink = 'https://t.me/your_channel';

  const handleJoinClick = async () => {
    setIsJoining(true);
    window.open(channelLink, '_blank');
    
    // Wait a bit before enabling the confirmation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsJoining(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* User Info */}
      <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
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

      {/* Instructions */}
      <div className="space-y-4">
        <p className="text-gray-400">
          Please join our official Telegram channel to complete the connection process:
        </p>
        
        <div className="space-y-4">
          <button
            onClick={handleJoinClick}
            className={cn(
              'w-full flex items-center justify-center gap-2',
              'px-6 py-3 rounded-lg',
              'bg-[#0088cc] hover:bg-[#0088cc]/90',
              'text-white font-medium',
              'transition-all duration-200',
              'group'
            )}
          >
            <Send className="w-5 h-5" />
            Join Telegram Channel
          </button>

          <button
            onClick={onChannelJoined}
            disabled={isJoining}
            className={cn(
              'w-full flex items-center justify-center gap-2',
              'px-6 py-3 rounded-lg',
              'bg-white/5 hover:bg-white/10',
              'border border-white/10 hover:border-white/20',
              'text-white font-medium',
              'transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'group'
            )}
          >
            <Check className="w-5 h-5" />
            I've Joined the Channel
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-400 text-center">
        After joining, click the button above to complete the connection process
      </p>
    </motion.div>
  );
}