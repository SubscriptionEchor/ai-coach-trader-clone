// src/components/settings/TelegramSettings.tsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTelegramStore } from '../../lib/store/telegramStore';
import { TelegramConnectModal } from '../telegram/TelegramConnectModal';
import { cn } from '../../lib/utils';

export function TelegramSettings() {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const { isConnected, username } = useTelegramStore();

  return (
    <>
      <div className={cn(
        'p-6 rounded-xl',
        'bg-[#1d1d1d] border border-white/5',
        'relative overflow-hidden'
      )}>
        <h2 className="text-xl font-semibold text-white mb-6">
          Telegram Connection
        </h2>

        <div className="space-y-4">
          {isConnected ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Connected Account</p>
                <p className="text-gray-400">@{username}</p>
              </div>
              <button
                onClick={() => setShowConnectModal(true)}
                className={cn(
                  'px-4 py-2 rounded-lg',
                  'bg-white/5 hover:bg-white/10',
                  'text-gray-400 hover:text-white',
                  'transition-colors'
                )}
              >
                Change Account
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-400">
                Connect your Telegram account to receive real-time trading signals and updates.
              </p>

              <button
                onClick={() => setShowConnectModal(true)}
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
                Connect Telegram
              </button>
            </>
          )}
        </div>
      </div>

      {/* Using the same TelegramConnectModal as dashboard */}
      <TelegramConnectModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
      />
    </>
  );
}
