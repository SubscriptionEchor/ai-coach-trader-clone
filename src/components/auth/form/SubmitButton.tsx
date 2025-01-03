import React from 'react';
import { cn } from '../../../lib/utils';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function SubmitButton({ 
  children, 
  isLoading,
  className,
  ...props 
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        'w-full px-6 py-3 rounded-lg',
        'bg-gradient-primary',
        'text-white font-medium',
        'transition-all duration-200',
        'hover:opacity-90',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'relative',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}