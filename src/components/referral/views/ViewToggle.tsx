
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
      'inline-flex p-1 rounded-lg',
      'bg-white/5 border border-white/10'
    )}>
      <button
        onClick={() => onViewChange('list')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-md',
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
        List View
      </button>
      <button
        onClick={() => onViewChange('tree')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-md',
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
        Tree View
      </button>
    </div>
  );
}
