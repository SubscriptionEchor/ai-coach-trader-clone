import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TelegramSuccessProps {
  username: string;
  onClose?: () => void;
}

export function TelegramSuccess({ username, onClose }: TelegramSuccessProps) {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className={cn(
          'w-16 h-16 rounded-full',
          'bg-emerald-500/10 border border-emerald-500/20',
          'flex items-center justify-center'
        )}>
          <Check className="w-8 h-8 text-emerald-500" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Successfully Connected!</h3>
        <p className="text-gray-400">
          Your Telegram account @{username} is now connected. You'll start receiving trading signals.
        </p>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className={cn(
            'px-6 py-3 rounded-lg',
            'bg-white/5 hover:bg-white/10',
            'text-gray-400 hover:text-white',
            'transition-colors'
          )}
        >
          Close
        </button>
      )}
    </div>
  );
}