import React from 'react';
import { FAQItem } from './FAQItem';
import { useFAQ } from '../../hooks/useFAQ';
import { faqData } from '../../data/faqData';

export function FAQList() {
  const { openIndex, toggleFAQ } = useFAQ();

  return (
    <div className="space-y-3">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
}