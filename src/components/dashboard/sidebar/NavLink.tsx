import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function NavLink({ to, icon: Icon, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'flex items-center gap-3',
        'px-3 py-2.5 rounded-lg',
        'text-sm font-medium',
        'transition-all duration-300',
        'hover:translate-x-1',
        isActive ? [
          'bg-gradient-to-r from-primary-light/20 to-primary-light/5',
          'text-white',
          'shadow-sm shadow-primary-light/10',
          'border border-primary-light/10'
        ] : [
          'text-gray-400 hover:text-white',
          'hover:bg-white/5',
          'border border-transparent'
        ]
      )}
    >
      <Icon className={cn(
        'w-5 h-5 transition-transform duration-300',
        'group-hover:scale-110',
        isActive && 'text-primary-light'
      )} />
      <span>{children}</span>
    </Link>
  );
}