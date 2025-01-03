import React from 'react';
import { Container } from './ui/Container';
import { FAQList } from './faq/FAQList';

export function FAQ() {
  return (
    <section className="py-24 relative">
      <Container className="max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800/50 backdrop-blur-sm text-sm text-gray-300 mb-6">
            FAQs
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            You asked,{' '}
            <span className="font-serif italic">we answered.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Still got questions? Feel free to reach out to
            <br />
            our incredible support team, 7 days a week.
          </p>
        </div>

        <FAQList />
      </Container>
    </section>
  );
}