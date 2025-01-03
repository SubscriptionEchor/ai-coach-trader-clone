import React from 'react';
import { cn } from '../../../lib/utils';

interface TelegramUsernameInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function TelegramUsernameInput({ 
  value, 
  onChange, 
  error 
}: TelegramUsernameInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">
        Telegram Username
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value.trim())}
          placeholder="username"
          className={cn(
            'w-full pl-8 pr-4 py-3 rounded-lg',
            'bg-white/5 border border-white/10',
            'text-white placeholder-gray-500',
            'focus:outline-none focus:border-[#0088cc]/30',
            'transition-colors',
            error && 'border-red-500/50'
          )}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}