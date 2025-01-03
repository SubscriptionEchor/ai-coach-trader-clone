import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface TelegramWarningProps {
  className?: string;
}

export function TelegramWarning({ className }: TelegramWarningProps) {
  return (
    <div className={cn(
      'flex items-start gap-3 p-4 rounded-lg',
      'bg-yellow-500/10 border border-yellow-500/20',
      'text-sm text-yellow-500',
      className
    )}>
      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="space-y-1">
        <p className="font-medium">Important Notice</p>
        <p className="text-yellow-500/90">
          Your Telegram username cannot be changed after connecting. Please ensure you enter the correct username.
        </p>
      </div>
    </div>
  );
}