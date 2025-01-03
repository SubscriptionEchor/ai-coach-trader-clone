import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '../../../lib/utils';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className={cn(
      'lg:hidden', // Hide on desktop
      'flex items-center justify-between',
      'h-16 px-4',
      'bg-[#1d1d1d] border-b border-white/5'
    )}>
      {/* Menu Button */}
      <button
        onClick={onMenuClick}
        className={cn(
          'p-2 rounded-lg',
          'text-gray-400 hover:text-white',
          'hover:bg-white/5',
          'transition-colors'
        )}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Logo */}
      <Logo />

      {/* Notifications */}
      <button
        className={cn(
          'p-2 rounded-lg',
          'text-gray-400 hover:text-white',
          'hover:bg-white/5',
          'transition-colors'
        )}
      >
        <Bell className="w-6 h-6" />
      </button>
    </header>
  );
}