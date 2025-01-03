import { motion } from 'framer-motion';
import React from 'react';
import { gradients } from '../../lib/constants/gradients';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <motion.span
      className={`${gradients.text} bg-clip-text text-transparent inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.span>
  );
}