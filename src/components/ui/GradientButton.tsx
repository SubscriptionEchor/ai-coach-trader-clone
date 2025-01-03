import React from 'react';
import { cn } from '../../lib/utils';
import { gradients } from '../../lib/constants/gradients';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function GradientButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props 
}: GradientButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  const variants = {
    primary: cn(
      gradients.button.primary,
      gradients.buttonHover.primary,
      "text-white shadow-lg shadow-blue-500/25",
      "border border-transparent"
    ),
    secondary: cn(
      gradients.button.secondary,
      gradients.buttonHover.secondary,
      "text-white",
      "border border-white/10 hover:border-white/20"
    ),
    accent: cn(
      gradients.button.primary,
      gradients.buttonHover.primary,
      "text-white shadow-lg shadow-blue-500/25",
      "border border-transparent"
    )
  };

  return (
    <button
      className={cn(
        'relative rounded-full font-medium',
        'transition-all duration-300 ease-out',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        'flex items-center justify-center',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </button>
  );
}