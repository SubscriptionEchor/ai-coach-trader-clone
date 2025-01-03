import React from 'react';
import { FeatureCard } from './FeatureCard';
import { featureData } from './featureData';
import { cn } from '../../../lib/utils';

export function FeatureGrid() {
  return (
    <div className={cn(
      'grid gap-12',
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'max-w-7xl mx-auto'
    )}>
      {featureData.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          index={index}
        />
      ))}
    </div>
  );
}