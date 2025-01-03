import React from 'react';
import { Send } from 'lucide-react';
import { cn } from '../../lib/utils';

export function FooterTelegram() {
  return (
    <div className="max-w-sm">
      <h3 className="text-xl font-semibold text-white mb-4">Join our Telegram</h3>
      <p className="text-gray-400 mb-6">
        Join our Telegram channel to get the latest updates and connect with our community.
      </p>
      <button 
        className={cn(
          "flex items-center justify-center",
          "px-6 py-2.5 rounded-lg",
          "bg-[#1d1d1d]/80 backdrop-blur-sm",
          "border border-white/5",
          "text-white font-medium",
          "transition-all duration-300",
          "hover:bg-[#2d2d2d]/80 hover:border-white/10",
          "group w-full sm:w-auto"
        )}
        onClick={() => window.open('https://t.me/your_channel', '_blank')}
      >
        Join Telegram
        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}