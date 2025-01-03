import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

export function FeatureHeader() {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-gray-400 uppercase tracking-wider mb-4"
      >
        Features
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl',
          'font-bold tracking-tight',
          'bg-gradient-to-r from-white to-white/70',
          'bg-clip-text text-transparent',
          'mb-6'
        )}
      >
        Analytics that feels like it's from the future
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-400 max-w-3xl mx-auto"
      >
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </motion.p>
    </div>
  );
}