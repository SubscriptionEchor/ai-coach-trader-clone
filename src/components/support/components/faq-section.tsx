import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from './faq-item';

const faqs = [
  {
    question: 'Do you only provide crypto signals?',
    answer: 'Yes, we specialize in cryptocurrency trading signals. Our AI-powered system is specifically designed to analyze crypto markets and provide accurate trading opportunities.'
  },
  {
    question: 'Are there any other features or services included besides crypto trading signals?',
    answer: 'Yes! Besides trading signals, we offer risk management tools, market analysis, educational resources, and 24/7 customer support. Our platform also includes portfolio tracking and performance analytics.'
  },
  {
    question: 'How do you customize the trading signals based on my chosen risk level?',
    answer: 'We offer different risk profiles that you can select from. Each profile adjusts parameters like leverage, stop-loss levels, and position sizing according to your risk tolerance.'
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: "Absolutely! You can change your subscription plan at any time. When upgrading, you'll only pay the difference for the remaining period. Downgrades take effect at the next billing cycle."
  },
  {
    question: 'How often will I receive trading signals with each plan?',
    answer: 'Signal frequency varies by plan, but typically you can expect 3-5 high-quality signals per day. Premium plans receive signals with higher priority and additional market insights.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        Frequently asked questions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>
    </div>
  );
}