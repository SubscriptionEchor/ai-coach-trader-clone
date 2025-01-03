
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '../lib/utils';

export function SubscriptionSuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Create a more dynamic celebration effect
    const runFireworks = () => {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      // Create colorful bursts
      const interval: any = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Burst from random positions
        confetti({
          ...defaults,
          particleCount,
          origin: { x: Math.random(), y: Math.random() * 0.5 + 0.2 },
          colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#38bdf8', '#7dd3fc'],
        });

        // Add some glitter effect
        confetti({
          particleCount: 20,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FFD700', '#FFA500', '#FF8C00'],
        });

        confetti({
          particleCount: 20,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FFD700', '#FFA500', '#FF8C00'],
        });
      }, 250);

      return () => clearInterval(interval);
    };

    runFireworks();
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
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-transparent to-primary-light/5" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Content */}
        <div className="relative">
          {/* Celebration Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "inline-flex items-center gap-2",
              "px-4 py-2 rounded-full",
              "bg-emerald-500/10 text-emerald-500",
              "mb-6"
            )}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">SUBSCRIPTION ACTIVATED</span>
          </motion.div>

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="flex justify-center mb-8"
          >
            <div className={cn(
              'w-24 h-24 rounded-full',
              'bg-emerald-500/10 border border-emerald-500/20',
              'flex items-center justify-center',
              'animate-pulse'
            )}>
              <Check className="w-12 h-12 text-emerald-500" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Welcome Aboard!
            </h1>
            <p className="text-lg text-gray-400">
              Your subscription is now active. Get ready to receive premium trading signals and maximize your potential.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/dashboard')}
            className={cn(
              'mt-8 w-full',
              'flex items-center justify-center gap-2',
              'px-6 py-4 rounded-xl',
              'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500',
              'hover:opacity-90',
              'text-white font-medium',
              'transition-all duration-300',
              'group'
            )}
          >
            Go to Dashboard
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
