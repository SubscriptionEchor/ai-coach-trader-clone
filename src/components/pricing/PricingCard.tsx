import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { CountdownTimer } from './CountdownTimer';

interface PricingCardProps {
  price: string;
  period: string;
  features: string[];
}

export function PricingCard({
  price,
  period,
  features
}: PricingCardProps) {
  return (
    <div className={cn(
      'relative p-8 max-w-xl mx-auto',
      'bg-[#1d1d1d] rounded-2xl',
      'border border-white/10',
      'hover:border-white/20',
      'transition-all duration-300',
      'group'
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative">
        {/* Timer */}
        <div className="mb-4">
          <CountdownTimer />
        </div>

        {/* Pricing */}
        <div className="flex items-baseline mb-2">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Regular
            </span>
            {/* <span className="text-gray-400 ml-2">/{period}</span> */}
          </div>
          <div className="ml-4 flex items-baseline">
            <span className="text-3xl font-medium text-gray-500">{price}</span>
            <span className="text-xl text-gray-600 ml-1">/{period}</span>
          </div>
        </div>
        <p className="text-gray-400">Limited time offer. Experience advanced market analysis today.</p>

        {/* Features */}
        <div className="space-y-4 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={cn(
                'p-1 rounded-lg',
                'bg-emerald-500/10',
                'group-hover:bg-emerald-500/20',
                'transition-colors duration-300'
              )}>
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={cn(
          'w-full mt-8',
          'flex items-center justify-center gap-2',
          'px-6 py-3 rounded-lg',
          'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500',
          'text-black font-medium',
          'transition-all duration-300',
          'hover:opacity-90',
          'group'
        )}>
          Subscribe Now
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>

        {/* No Credit Card Required */}
        <p className="text-xs text-gray-400 mt-4">
          Disclaimer: This tool provides technical analysis for informational purposes only. Always conduct your own research and due diligence.
        </p>
      </div>
    </div>
  );
}