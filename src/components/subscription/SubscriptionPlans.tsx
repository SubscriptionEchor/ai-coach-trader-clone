
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { CoinPaymentsModal } from './CoinPaymentsModal';
import { Container } from '../ui/Container';
import { NetworkAnimation } from '../animations/NetworkAnimation';

const plan = {
  name: 'Regular',
  price: '130',
  period: 'month',
  features: [
    'AI-powered market analytics',
    'Dynamic technical analysis (300+ indicators)',
    'Real-time market notifications via Telegram',
    'Multi-timeframe data analysis',
    'Advanced pattern recognition',
    'Premium community insights',
    'Market trend updates',
    'Educational resources',
    'Technical support'
  ]
};

export function SubscriptionPlans() {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePaymentSuccess = () => {
    navigate('/subscription-success');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <NetworkAnimation />
      </div>

      <Container className="relative py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "inline-flex items-center gap-2",
              "px-4 py-2 rounded-full",
              "bg-primary-light/10 text-primary-light",
              "mb-6"
            )}
          >
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">PREMIUM ACCESS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Start Your Trading Journey{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Today
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Get access to premium trading signals and advanced features to maximize your trading potential
          </motion.p>
        </div>

        {/* Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <div className={cn(
            'p-8 rounded-2xl',
            'bg-[#1d1d1d] border border-white/10',
            'hover:border-white/20',
            'transition-all duration-300',
            'relative overflow-hidden'
          )}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
            </div>

            <div className="relative">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name} Plan</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div className={cn(
                      'p-1 rounded-lg',
                      'bg-primary-light/10',
                      'transition-colors duration-300'
                    )}>
                      <Check className="w-4 h-4 text-primary-light" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowPaymentModal(true)}
                className={cn(
                  'w-full flex items-center justify-center gap-2',
                  'px-6 py-4 rounded-xl',
                  'bg-gradient-primary hover:opacity-90',
                  'text-white font-medium',
                  'transition-all duration-300',
                  'group'
                )}
              >
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* CoinPayments Modal */}
      <CoinPaymentsModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={handlePaymentSuccess}
        plan={plan}
      />
    </div>
  );
}
