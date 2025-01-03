
import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './data/testimonials';
import { cn } from '../../lib/utils';

export function TestimonialsGrid() {
  return (
    <div className="relative min-h-[800px]">
      {/* First Column */}
      <div className="absolute left-0 top-0 space-y-8">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            delay={index * 0.2}
          />
        ))}
      </div>

      {/* Second Column */}
      <div className="absolute left-1/3 top-32 space-y-8">
        {testimonials.slice(2, 3).map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            delay={(index + 2) * 0.2}
          />
        ))}
      </div>

      {/* Third Column */}
      <div className="absolute left-2/3 top-64 space-y-8">
        {testimonials.slice(3, 4).map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            delay={(index + 3) * 0.2}
          />
        ))}
      </div>
    </div>
  );
}
