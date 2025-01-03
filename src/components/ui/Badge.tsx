import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-800/50 text-white',
    success: 'bg-green-500/10 text-green-500'
  };

  return (
    <span className={`${variants[variant]} px-4 py-2 rounded-full text-sm font-medium`}>
      {children}
    </span>
  );
}