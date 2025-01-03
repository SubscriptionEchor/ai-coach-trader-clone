import React from 'react';
import { Users } from 'lucide-react';
import { cn } from '../../../lib/utils';

export function TreeHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className={cn(
          'p-2.5 rounded-lg',
          'bg-primary-light/10'
        )}>
          <Users className="w-5 h-5 text-primary-light" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Referral Network</h2>
          <p className="text-sm text-gray-400 mt-1">Visual representation of your referral tree</p>
        </div>
      </div>
    </div>
  );
}