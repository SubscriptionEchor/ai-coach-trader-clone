import React from 'react';
import { cn } from '../../../lib/utils';

interface TelegramInstructionsProps {
  className?: string;
}

export function TelegramInstructions({ className }: TelegramInstructionsProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-sm font-medium text-gray-400">
        Follow these steps to connect:
      </h3>
      
      <div className="space-y-3">
        {[
          'Open Telegram and go to Settings',
          'Look for your username under your profile',
          'If you haven\'t set a username, create one now',
          'Enter your username below (without the @ symbol)',
        ].map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <div className={cn(
              'flex-shrink-0 w-6 h-6 rounded-full',
              'bg-[#0088cc]/10 text-[#0088cc]',
              'flex items-center justify-center',
              'text-sm font-medium'
            )}>
              {index + 1}
            </div>
            <p className="text-gray-300 text-sm">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}