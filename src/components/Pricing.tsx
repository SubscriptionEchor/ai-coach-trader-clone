import React from 'react';
import { Container } from './ui/Container';
import { PricingBadge } from './pricing/PricingBadge';
import { PricingCard } from './pricing/PricingCard';
import { TrustedBy } from './pricing/TrustedBy';
import { GridBackground } from './pricing/GridBackground';

const features = [
  'Unlimited design requests',
  'One request at a time',
  'Average 48 hours delivery',
  'Unlimited revisions',
  'Unlimited brands',
  'Invite unlimited users',
  'Pause or cancel anytime',
  'Custom illustrations'
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
          price="$2,989"
          period="month"
          features={features}
        />

        <TrustedBy />
      </Container>
    </section>
  );
}