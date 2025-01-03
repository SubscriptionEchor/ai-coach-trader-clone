
import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './data/testimonials';
import { cn } from '../../lib/utils';

export function TestimonialsCards() {
  // Split testimonials into two columns
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* First Column */}
      <div className="space-y-6">
        {column1.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1 
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      {/* Second Column */}
      <div className="space-y-6 pt-12">
        {column2.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: (index + column1.length) * 0.1 
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}