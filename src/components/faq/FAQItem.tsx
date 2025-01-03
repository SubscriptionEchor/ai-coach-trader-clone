import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-white/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <span className="text-xl text-white font-normal group-hover:text-gray-300 transition-colors">
          {question}
        </span>
        <span className={cn(
          "ml-6 flex-shrink-0 rounded-full p-2 bg-gray-800/50 transition-transform duration-200",
          isOpen && "rotate-45"
        )}>
          <Plus className="w-4 h-4 text-gray-400" />
        </span>
      </button>
      <div
        className={cn(
          'transition-all duration-200 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="p-6 pt-0">
          <p className="text-gray-400 text-lg leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}