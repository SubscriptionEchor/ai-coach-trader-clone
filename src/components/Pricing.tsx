import React from 'react';
import { Container } from './ui/Container';
import { PricingBadge } from './pricing/PricingBadge';
import { PricingCard } from './pricing/PricingCard';
import { TrustedBy } from './pricing/TrustedBy';
import { GridBackground } from './pricing/GridBackground';

const features = [
  'AI-powered market analytics',
  'Dynamic technical analysis (300+ indicators)',
  'Real-time market notifications via Telegram',
  'Multi-timeframe data analysis',
  'Advanced pattern recognition',
  'Premium community insights',
  'Market trend updates',
  'Educational resources',
  'Technical support'
];

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Grid Background */}
      <GridBackground />

      <Container className="relative max-w-4xl">
        <div className="text-center mb-16">
          <PricingBadge text="Pricing" />
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mt-6 mb-4">
            Pricing that's so{' '}
            <span className="font-serif italic">simple</span>
            <span className="text-white">.</span>
          </h2>
          <p className="text-lg text-gray-400">
            We like to keep things simple with one, limitless plan.
          </p>
        </div>

        <PricingCard
          price="$130"
          period="month"
          features={features}
        />

        <TrustedBy />
      </Container>
    </section>
  );
}