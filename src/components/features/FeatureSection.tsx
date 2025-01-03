import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { FeatureGrid } from './FeatureGrid';
import { SectionHeader } from './SectionHeader';
import { NetworkAnimation } from '../animations/NetworkAnimation';
import { cn } from '../../lib/utils';

export function FeatureSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <NetworkAnimation />
      </div>

      <Container className="relative">
        <SectionHeader />
        <FeatureGrid />
      </Container>
    </section>
  );
}