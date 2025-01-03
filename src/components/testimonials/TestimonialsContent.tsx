
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function TestimonialsContent() {
  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
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

      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "font-display font-bold tracking-tighter",
          "text-6xl sm:text-7xl lg:text-8xl",
          "leading-[0.8]",
          "mb-8"
        )}
      >
        A few
        <br />
        words
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gray-400 text-lg max-w-md"
      >
        Join thousands of satisfied traders who trust our AI-powered signals
        to make informed trading decisions.
      </motion.p>
    </div>
  );
}
