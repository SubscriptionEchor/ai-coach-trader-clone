import React from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface RequestStatusProps {
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

export function RequestStatus({ email, status, date }: RequestStatusProps) {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      text: 'Application Under Review'
    },
    approved: {
      icon: CheckCircle2,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      text: 'Application Approved'
    },
    rejected: {
      icon: XCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      text: 'Application Rejected'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      <div className={cn(
        'flex items-start gap-4 p-4 rounded-lg',
        config.bgColor,
        `border ${config.borderColor}`
      )}>
        <Icon className={cn('w-6 h-6', config.color)} />
        <div>
          <h3 className={cn('font-medium mb-1', config.color)}>
            {config.text}
          </h3>
          <p className="text-gray-400">
            Application submitted for {email}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Submitted on {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}