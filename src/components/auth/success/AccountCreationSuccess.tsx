import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '../../../lib/utils';

export function AccountCreationSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Subtle confetti animation
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#3b82f6', '#60a5fa', '#93c5fd'],
      disableForReducedMotion: true,
      scalar: 0.8,
      gravity: 0.6,
      drift: 0,
      ticks: 200
    };

    confetti({
      ...defaults,
      particleCount: 30,
      spread: 40,
      startVelocity: 15,
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'w-full max-w-md p-8 rounded-2xl',
          'bg-[#1d1d1d] border border-white/10',
          'text-center relative overflow-hidden'
        )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Content */}
        <div className="relative">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
            className="flex justify-center mb-8"
          >
            <div className={cn(
              'w-20 h-20 rounded-full',
              'bg-emerald-500/10 border border-emerald-500/20',
              'flex items-center justify-center'
            )}>
              <Check className="w-10 h-10 text-emerald-500" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold">
              Account Created Successfully!
            </h1>
            <p className="text-lg text-gray-400">
              Welcome to our trading community. Choose your subscription plan to get started.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/subscribe')}
            className={cn(
              'mt-8 w-full',
              'flex items-center justify-center gap-2',
              'px-6 py-4 rounded-xl',
              'bg-gradient-primary hover:opacity-90',
              'text-white font-medium',
              'transition-all duration-300',
              'group'
            )}
          >
            Continue to Subscribe
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}