
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function TestimonialsHeader() {
  return (
    <div className="mb-24">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={cn(
          "text-primary-light",
          "text-sm font-medium tracking-wider uppercase",
          "mb-4 block"
        )}
      >
        Testimonials
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "font-display font-bold tracking-tighter",
          "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
          "leading-[0.8]"
        )}
      >
        A few
        <br />
        words
      </motion.h2>
    </div>
  );
}
