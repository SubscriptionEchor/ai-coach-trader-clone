import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

const faqs = [
  {
    question: 'How accurate are the trading signals?',
    answer: 'Our AI-powered signals have demonstrated a 94% accuracy rate over the past year. Each signal is generated using advanced machine learning algorithms that analyze multiple market indicators and patterns.'
  },
  {
    question: 'How do I receive trading signals?',
    answer: 'Trading signals are delivered instantly through our Telegram channel. Once you connect your Telegram account, youll receive real-time notifications for every trading opportunity.'
  },
  {
    question: 'What is the referral program?',
    answer: 'Our multi-level referral program allows you to earn commissions from traders you refer. You earn 30% of the subscription fee from direct referrals (Level 1) and additional percentages from their referrals up to Level 5.'
  },
  {
    question: 'How do withdrawals work?',
    answer: 'You can withdraw your earned commissions once you reach the minimum threshold of $50. Withdrawals are processed within 24-48 hours and can be made via bank transfer, cryptocurrency, or PayPal.'
  },
  {
    question: 'What cryptocurrencies do you support?',
    answer: 'We currently support major cryptocurrency pairs including BTC, ETH, SOL, and more. Our signals cover both spot and leverage trading opportunities.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative">
        <h2 className="text-xl font-semibold text-white mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'rounded-lg overflow-hidden',
                'border border-white/10',
                'hover:border-white/20',
                'transition-colors duration-300'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'w-full flex items-center justify-between',
                  'p-4 text-left',
                  'bg-white/5',
                  'hover:bg-white/[0.07]',
                  'transition-colors duration-200'
                )}
              >
                <span className="font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}