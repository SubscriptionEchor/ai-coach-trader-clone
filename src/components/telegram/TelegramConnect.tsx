import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTelegramStore } from '../../lib/store/telegramStore';
import { TelegramVerification } from './TelegramVerification';
import { TelegramSuccess } from './TelegramSuccess';
import { cn } from '../../lib/utils';

interface TelegramConnectProps {
  onClose?: () => void;
}

export function TelegramConnect({ onClose }: TelegramConnectProps) {
  const { connectionStep, setConnectionStep } = useTelegramStore();
  const [username, setUsername] = useState('');

  const handleConnect = () => {
    window.open('https://t.me/your_bot', '_blank');
    setConnectionStep('verification');
  };

  if (connectionStep === 'verification') {
    return <TelegramVerification username={username} onClose={onClose} />;
  }

  if (connectionStep === 'success') {
    return <TelegramSuccess username={username} onClose={onClose} />;
  }

  return (
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
  );
}