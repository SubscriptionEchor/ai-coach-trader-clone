import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <div className={cn(
      'group relative',
      'p-1 rounded-3xl',
      'bg-gradient-to-br from-primary-light/20 via-primary-light/10 to-transparent',
      'hover:from-primary-light/30 hover:via-primary-light/20 hover:to-primary-light/5',
      'transition-all duration-500'
    )}>
      {/* Card Content */}
      <div className={cn(
        'relative h-full',
        'p-8 rounded-[22px]',
        'bg-[#1d1d1d]',
        'overflow-hidden'
      )}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_-100%,rgba(51,144,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Icon Container */}
        <div className="relative mb-8">
          <div className={cn(
            'absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100',
            'bg-gradient-to-br from-primary-light/20 via-transparent to-transparent',
            'blur-2xl transition-opacity duration-500'
          )} />
          <div className={cn(
            'relative',
            'w-14 h-14 rounded-2xl',
            'bg-gradient-to-br from-primary-light/20 to-primary-light/5',
            'flex items-center justify-center',
            'group-hover:scale-110 transition-transform duration-500'
          )}>
            <Icon className="w-7 h-7 text-primary-light" />
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className={cn(
              'text-xl font-semibold',
              'bg-gradient-to-br from-white to-white/70',
              'bg-clip-text text-transparent'
            )}>
              {title}
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.1 }}
            className="text-gray-400 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Hover Line Effect */}
        <div className={cn(
          'absolute bottom-0 left-0 right-0 h-1',
          'bg-gradient-to-r from-transparent via-primary-light/50 to-transparent',
          'opacity-0 group-hover:opacity-100',
          'translate-y-1 group-hover:translate-y-0',
          'transition-all duration-500'
        )} />
      </div>
    </div>
  );
}