import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SectionHeader() {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "inline-flex items-center gap-2",
          "px-4 py-2 rounded-full",
          "bg-primary-light/10 text-primary-light",
          "mb-6"
        )}
      >
        <Zap className="w-4 h-4" />
        <span className="text-sm font-medium">PLATFORM FEATURES</span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
      >
        Advanced Trading Platform{' '}
        <span className="text-transparent bg-clip-text bg-gradient-primary">
          Built for Performance
        </span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto"
      >
        Experience a comprehensive suite of trading tools designed to help you 
        execute trades with precision and maximize your potential returns.
      </motion.p>
    </div>
  );
}