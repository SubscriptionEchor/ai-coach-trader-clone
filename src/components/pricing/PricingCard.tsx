import React from 'react';
import { PricingFeature } from './PricingFeature';
import { PricingHeader } from './PricingHeader';
import { GradientButton } from '../ui/GradientButton';
import { ArrowRight } from 'lucide-react';
import { AIBackground } from './AIBackground';
import { cn } from '../../lib/utils';

interface PricingCardProps {
  price: string;
  period: string;
  features: string[];
}

export function PricingCard({
  price,
  period,
  features
}: PricingCardProps) {
  return (
    <div className={cn(
      'relative overflow-hidden',
      'rounded-2xl p-8 max-w-xl mx-auto',
      'bg-[#1d1d1d] backdrop-blur-sm',
      'border border-emerald-500/10 hover:border-emerald-500/20',
      'transition-colors duration-300'
    )}>
      {/* Interactive AI Background */}
      <AIBackground />

      {/* Card Content */}
      <div className="relative z-10">
        <PricingHeader price={price} period={period} />

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <PricingFeature key={index} text={feature} />
          ))}
        </div>

        <div className="space-y-4">
          <GradientButton 
            variant="secondary"
            size="lg"
            fullWidth
            className={cn(
              'group relative overflow-hidden',
              'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500',
              'hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400',
              'transition-all duration-300'
            )}
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </GradientButton>

          <div className="text-sm text-gray-400 text-center">
            * No credit card required
          </div>
        </div>
      </div>
    </div>
  );
}