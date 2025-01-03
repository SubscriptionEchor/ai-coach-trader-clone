import React from 'react';
import { cn } from '../../lib/utils';
import { gradients } from '../../lib/constants/gradients';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function GradientText({ 
  children, 
  className,
  animated = true 
}: GradientTextProps) {
  return (
    <span className={cn(
      'bg-clip-text text-transparent',
      gradients.text,
      animated && 'animate-gradient',
      className
    )}>
      {children}
    </span>
  );
}