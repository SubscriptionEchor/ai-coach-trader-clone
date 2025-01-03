
import React from 'react';
import { Container } from '../ui/Container';
import { TestimonialsContent } from './TestimonialsContent';
import { TestimonialsWall } from './TestimonialsWall';
import { cn } from '../../lib/utils';

export function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Content */}
          <TestimonialsContent />
          
          {/* Right Column - Animated Wall */}
          <div className="relative min-h-[600px]">
            <TestimonialsWall />
          </div>
        </div>
      </Container>
    </section>
  );
}
