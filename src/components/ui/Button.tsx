import React from 'react';
import { cn } from '../../lib/utils';
import { gradients } from '../../lib/constants/gradients';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = 'secondary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-full font-medium",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
    "disabled:opacity-50 disabled:pointer-events-none",
    fullWidth && "w-full"
  );
  
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
    ghost: cn(
      "text-gray-400 hover:text-white",
      "hover:bg-white/5",
      "border border-transparent"
    )
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}