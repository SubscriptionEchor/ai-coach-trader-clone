import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, ArrowRight } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';
import { TelegramButton } from '../ui/TelegramButton';
import { cn } from '../../lib/utils';

export function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "inline-flex items-center gap-3",
          "px-4 py-2 rounded-full",
          "bg-gradient-to-r from-primary-light/10 to-transparent",
          "border border-primary-light/10",
          "mb-8 md:mb-12"
        )}
      >
        <Brain className="w-4 h-4 text-primary-light" />
        <span className="text-xs md:text-sm font-medium tracking-wide text-primary-light/90">
          POWERED BY ARTIFICIAL INTELLIGENCE
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
          "font-bold tracking-tight leading-[1.1]",
          "mb-6 md:mb-8"
        )}
      >
        Trade Smarter with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-primary">
          AI-Driven
        </span>{' '}
        <span className="font-serif italic">Signalling Tool</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "text-base md:text-lg lg:text-xl",
          "text-gray-400 leading-relaxed",
          "mb-8 md:mb-12",
          "max-w-xl"
        )}
      >
        AI-powered platform monitors market patterns and delivers real-time analysis to help inform your trading decisions. Join a community of data-focused traders using advanced analytics tools.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <GradientButton
          variant="primary"
          size="lg"
          className="min-w-[200px] group"
          onClick={() => navigate('/signup')}
        >
          <span className="flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </GradientButton>

        <TelegramButton
          onClick={() => window.open('https://t.me/your_channel', '_blank')}
          className="min-w-[200px]"
        >
          Join Community
        </TelegramButton>
      </motion.div>
    </div>
  );
}