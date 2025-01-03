import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { featureData } from './featureData';
import { cn } from '../../lib/utils';

export function FeatureGrid() {
  return (
    <div className={cn(
      'grid gap-6',
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'max-w-7xl mx-auto'
    )}>
      {featureData.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <FeatureCard {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  );
}