import React from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { ApprovalStatus } from './types';

interface TelegramApprovalStatusProps {
  status: ApprovalStatus;
  username: string;
}

export function TelegramApprovalStatus({ status, username }: TelegramApprovalStatusProps) {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      title: 'Approval Pending',
      message: 'Our team is reviewing your request. This usually takes 1-2 business days.'
    },
    approved: {
      icon: CheckCircle2,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      title: 'Approved!',
      message: 'Your Telegram account has been verified and connected.'
    },
    rejected: {
      icon: AlertCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      title: 'Approval Rejected',
      message: 'Please contact support for more information.'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/10',
      'relative overflow-hidden'
    )}>
      {/* Status Section */}
      <div className={cn(
        'flex items-start gap-4 p-4 rounded-lg mb-6',
        config.bgColor,
        `border ${config.borderColor}`
      )}>
        <Icon className={cn('w-6 h-6', config.color)} />
        <div>
          <h3 className={cn('font-medium mb-1', config.color)}>
            {config.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {config.message}
          </p>
        </div>
      </div>

      {/* User Info */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-2">Connected Account</div>
        <div className="flex items-center gap-3">
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
      </div>

      {/* Channel Join Section */}
      {status === 'approved' && (
        <div>
          <button
            onClick={() => window.open('https://t.me/your_channel', '_blank')}
            className={cn(
              'w-full flex items-center justify-center gap-2',
              'px-6 py-3 rounded-lg',
              'bg-[#0088cc] hover:bg-[#0088cc]/90',
              'text-white font-medium',
              'transition-all duration-200',
              'group'
            )}
          >
            Join Telegram Channel
          </button>
          <p className="text-sm text-gray-400 text-center mt-4">
            Join our official channel to start receiving signals
          </p>
        </div>
      )}
    </div>
  );
}