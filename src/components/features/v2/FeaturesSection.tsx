import React from 'react';
import { FeatureHeader } from './FeatureHeader';
import { FeatureGrid } from './FeatureGrid';
import { cn } from '../../../lib/utils';

export function FeaturesSection() {
  return (
    <section className={cn(
      'py-32 relative overflow-hidden',
      'bg-gradient-to-b from-black via-gray-900 to-black'
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container relative z-10">
        <FeatureHeader />
        <FeatureGrid />
      </div>
    </section>
  );
}