import React from 'react';
import { Send, Brain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function PreviewContent() {
  return (
    <div className="relative">
      {/* Badge */}
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
        <Brain className="w-4 h-4" />
        <span className="text-sm font-medium">AI-POWERED SIGNALS</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl",
          "font-bold tracking-tight",
          "mb-6"
        )}
      >
        Trade Smarter with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-primary">
          AI-Generated
        </span>{' '}
        <span className="font-serif italic">Signals</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-400 mb-8 max-w-xl"
      >
        Our advanced AI algorithms analyze market patterns 24/7 to deliver
        high-probability trading signals directly to your Telegram. Join
        thousands of traders making data-driven decisions.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        onClick={() => window.open('https://t.me/your_channel', '_blank')}
        className={cn(
          'group flex items-center gap-2',
          'px-8 py-4 rounded-xl',
          'bg-gradient-primary hover:opacity-90',
          'text-white font-medium',
          'transition-all duration-300'
        )}
      >
        <Send className="w-5 h-5" />
        Join Telegram Channel
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    </div>
  );
}