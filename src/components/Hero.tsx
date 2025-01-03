import React from 'react';
import { Container } from './ui/Container';
import { HeroContent } from './hero/HeroContent';
import { HeroVideo } from './hero/HeroAnimation';
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
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-12 lg:gap-20',
            'items-center max-w-7xl mx-auto'
          )}
        >
          {/* Left Column - Content */}
          <div className="relative order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Right Column - Animation */}
          <div className="relative order-1 lg:order-2">
            <HeroVideo videoSrc="https://echor-assets.s3.ap-south-2.amazonaws.com/heroAsset.mp4" />
          </div>
        </div>
      </Container>
    </section>
  );
}
