import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Brain, LineChart, Bot, Zap } from 'lucide-react';
import { NetworkAnimation } from './animations/NetworkAnimation';
import { cn } from '../lib/utils';

const features = [
  {
    icon: Brain,
    title: 'Neural Network Analysis',
    description: 'Our advanced AI models process millions of data points to identify high-probability trading opportunities.',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500'
  },
  {
    icon: LineChart,
    title: 'Real-time Market Insights',
    description: 'Get instant market analysis and predictions powered by state-of-the-art machine learning algorithms.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
  },
  {
    icon: Bot,
    title: 'Automated Trading Systems',
    description: 'Connect your preferred exchange and let our AI bots execute trades with precision timing.',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500'
  },
  {
    icon: Zap,
    title: 'Instant Signal Delivery',
    description: 'Receive trading signals directly in Telegram with detailed entry, target, and stop-loss points.',
    gradient: 'from-pink-500 via-rose-500 to-red-500'
  }
];

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <NetworkAnimation />
      </div>

      <Container className="relative">
        {/* Section Header */}
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
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">POWERED BY AI</span>
          </motion.div>
          
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
            Advanced Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Smart Trading
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Our platform combines cutting-edge AI technology with powerful trading tools
            to help you make informed decisions and maximize profits.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'group relative',
                'p-8 lg:p-10 rounded-2xl',
                'bg-[#1d1d1d] border border-white/10',
                'hover:border-white/20',
                'transition-all duration-300'
              )}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
              </div>

              {/* Icon */}
              <div className={cn(
                'relative inline-flex p-4 rounded-xl mb-6',
                'bg-gradient-to-br',
                feature.gradient,
                'opacity-80 group-hover:opacity-100',
                'transition-opacity duration-300'
              )}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className={cn(
                'absolute inset-0 opacity-0 group-hover:opacity-100',
                'bg-gradient-to-b from-primary-light/5 via-transparent to-transparent',
                'transition-opacity duration-300'
              )} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}