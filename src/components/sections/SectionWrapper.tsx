import React from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-24 md:py-32 scroll-mt-24', className)}
    >
      {children}
    </section>
  );
}