import React from 'react';
import { LayoutList, Network } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ViewToggleProps {
  view: 'list' | 'tree';
  onViewChange: (view: 'list' | 'tree') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className={cn(
      'flex p-1 rounded-lg',
      'bg-white/5 border border-white/10',
      'w-full sm:w-auto' // Full width on mobile
    )}>
      <button
        onClick={() => onViewChange('list')}
        className={cn(
          'flex items-center justify-center gap-2',
          'flex-1 sm:flex-initial px-4 py-2 rounded-md', // Flex-1 on mobile
          'text-sm font-medium transition-all duration-200',
          view === 'list' ? [
            'bg-primary-light/10 text-primary-light',
            'border border-primary-light/20'
          ] : [
            'text-gray-400 hover:text-white',
            'border border-transparent'
          ]
        )}
      >
        <LayoutList className="w-4 h-4" />
        <span>List View</span>
      </button>
      <button
        onClick={() => onViewChange('tree')}
        className={cn(
          'flex items-center justify-center gap-2',
          'flex-1 sm:flex-initial px-4 py-2 rounded-md', // Flex-1 on mobile
          'text-sm font-medium transition-all duration-200',
          view === 'tree' ? [
            'bg-primary-light/10 text-primary-light',
            'border border-primary-light/20'
          ] : [
            'text-gray-400 hover:text-white',
            'border border-transparent'
          ]
        )}
      >
        <Network className="w-4 h-4" />
        <span>Tree View</span>
      </button>
    </div>
  );
}