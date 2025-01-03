import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center group"
    >
      <div className={cn(
        'inline-flex p-4 rounded-2xl mb-6',
        'bg-white/5 backdrop-blur-sm',
        'border border-white/10',
        'group-hover:border-white/20',
        'group-hover:bg-white/[0.07]',
        'transition-all duration-300'
      )}>
        <Icon className="w-6 h-6 text-primary-light" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </motion.div>
  );
}