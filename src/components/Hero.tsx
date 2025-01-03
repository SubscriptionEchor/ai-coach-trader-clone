import React from 'react';
import { Container } from './ui/Container';
import { HeroContent } from './hero/HeroContent';
import { HeroAnimation } from './hero/HeroAnimation';
import { NetworkAnimation } from './animations/NetworkAnimation';
import { NoiseBackground } from './animations/NoiseBackground';
import { cn } from '../lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <NoiseBackground />
        <NetworkAnimation />
      </div>

      <Container>
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 lg:gap-20",
          "items-center max-w-7xl mx-auto"
        )}>
          {/* Left Column - Content */}
          <HeroContent />

          {/* Right Column - Animation */}
          <div className="relative">
            <HeroAnimation />
          </div>
        </div>
      </Container>
    </section>
  );
}