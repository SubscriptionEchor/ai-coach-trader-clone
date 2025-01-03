import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { cn } from '../../lib/utils';

export function TelegramSupport() {
  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      <div className="flex items-center gap-3 mb-6">
        <div className={cn(
          'p-2.5 rounded-lg',
          'bg-[#0088cc]/10'
        )}>
          <MessageCircle className="w-5 h-5 text-[#0088cc]" />
        </div>
        <h2 className="text-xl font-semibold text-white">Quick Support</h2>
      </div>

      <p className="text-gray-400 mb-6">
        Get instant support through our Telegram channel. Our team is available 24/7 to assist you.
      </p>

      <button
        onClick={() => window.open('https://t.me/your_support', '_blank')}
        className={cn(
          'flex items-center justify-center gap-2',
          'w-full px-6 py-3 rounded-lg',
          'bg-[#0088cc] hover:bg-[#0088cc]/90',
          'text-white font-medium',
          'transition-all duration-200',
          'group'
        )}
      >
        Join Support Channel
        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}