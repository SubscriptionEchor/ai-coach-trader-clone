import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const stats = [
  { value: '94%', label: 'Signal Accuracy' },
  { value: '24/7', label: 'Market Analysis' },
  { value: '50K+', label: 'Active Traders' },
  { value: '150+', label: 'Supported Pairs' }
];

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          className={cn(
            'p-6 rounded-2xl',
            'bg-[#1d1d1d]/40 backdrop-blur-sm',
            'border border-white/5',
            'hover:border-primary-light/20 transition-all duration-300'
          )}
        >
          <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
            {stat.value}
          </div>
          <p className="text-gray-400 text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}