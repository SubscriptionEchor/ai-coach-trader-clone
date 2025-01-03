
import React from 'react';
import { Users, Network, Wallet } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ReferralNavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function ReferralNavigation({ activeView, onViewChange }: ReferralNavigationProps) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'tree', label: 'Tree View', icon: Network },
    { id: 'earnings', label: 'Earnings', icon: Wallet }
  ];

  return (
    <div className={cn(
      'flex items-center gap-1',
      'p-1 rounded-lg',
      'bg-white/5 border border-white/10',
      'overflow-x-auto scrollbar-hide', // Allow horizontal scroll on small screens
      'w-full sm:w-auto' // Full width on mobile
    )}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onViewChange(item.id)}
          className={cn(
            'flex items-center gap-2',
            'px-3 py-2 rounded-lg', // Reduced padding
            'text-sm font-medium whitespace-nowrap', // Prevent text wrapping
            'flex-1 sm:flex-initial', // Equal width on mobile
            'transition-all duration-200',
            activeView === item.id ? [
              'bg-primary-light/10 text-primary-light',
              'border border-primary-light/20'
            ] : [
              'text-gray-400 hover:text-white',
              'hover:bg-white/5',
              'border border-transparent'
            ]
          )}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </button>
      ))}
    </div>
  );
}
