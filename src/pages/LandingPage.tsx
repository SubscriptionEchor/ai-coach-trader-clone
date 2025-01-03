import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { DevicePreview } from '../components/DevicePreview';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { SectionWrapper } from '../components/sections/SectionWrapper';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        
        <SectionWrapper id="features">
          <Features />
        </SectionWrapper>

        <SectionWrapper id="preview">
          <DevicePreview />
        </SectionWrapper>

        <SectionWrapper id="testimonials">
          <TestimonialsSection />
        </SectionWrapper>

        <SectionWrapper id="pricing">
          <Pricing />
        </SectionWrapper>

        <SectionWrapper id="faq">
          <FAQ />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}