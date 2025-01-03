import React from 'react';
import { Users } from 'lucide-react';
import { cn } from '../../lib/utils';
import { TelegramButton } from '../ui/TelegramButton';

export function FooterCommunity() {
  const stats = [
    { value: '50K+', label: 'Active Members' },
    { value: '24/7', label: 'Live Support' }
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-primary-light/10">
          <Users className="w-5 h-5 text-primary-light" />
        </div>
        <h3 className="text-xl font-semibold">Join Our Community</h3>
      </div>

      <p className="text-gray-400 mb-8 leading-relaxed text-lg">
        Connect with traders worldwide. Share insights, strategies, and stay updated with market trends.
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat) => (
          <div 
            key={stat.label}
            className={cn(
              'p-5 rounded-xl text-center',
              'bg-white/5 border border-white/10',
              'hover:bg-white/[0.07] hover:border-white/20',
              'transition-all duration-200'
            )}
          >
            <div className="text-2xl font-semibold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <TelegramButton
        fullWidth
        onClick={() => window.open('https://t.me/your_channel', '_blank')}
      >
        Join Community
      </TelegramButton>
    </div>
  );
}