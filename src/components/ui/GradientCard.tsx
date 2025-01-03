import React from 'react';
import { cn } from '../../lib/utils';
import { gradients } from '../../lib/constants/gradients';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function GradientCard({ 
  children, 
  className,
  animated = false 
}: GradientCardProps) {
  return (
    <div className={cn(
      'rounded-2xl p-6',
      gradients.card,
      animated && 'animate-gradient',
      gradients.cardHover,
      'transition-all duration-300',
      className
    )}>
      {children}
    </div>
  );
}