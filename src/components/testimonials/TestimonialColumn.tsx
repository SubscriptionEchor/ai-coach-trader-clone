
import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { Testimonial } from './types';
import { cn } from '../../lib/utils';

interface TestimonialColumnProps {
  testimonials: Testimonial[];
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export function TestimonialColumn({ 
  testimonials,
  className,
  speed = 20,
  direction = 'up'
}: TestimonialColumnProps) {
  // Double the testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        animate={{
          y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: testimonials.length * speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="space-y-6"
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.id}-${index}`} 
            className="relative"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
