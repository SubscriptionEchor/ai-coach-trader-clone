import React from 'react';
import { Brain } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';
import { cn } from '../../lib/utils';

export function FooterTop() {
  return (
    <div className={cn(
      'flex flex-col lg:flex-row items-center justify-between gap-8',
      'p-8 lg:p-12 mb-20 rounded-2xl',
      'bg-gradient-to-r from-primary-light/10 via-transparent to-transparent',
      'border border-primary-light/10'
    )}>
      <div className="flex items-center gap-6">
        <div className="p-3.5 rounded-xl bg-primary-light/10">
          <Brain className="w-7 h-7 text-primary-light" />
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-semibold mb-2">Ready to get started?</h3>
          <p className="text-gray-400 text-lg">Join thousands of traders using our AI signals</p>
        </div>
      </div>
      
      <GradientButton 
        variant="primary"
        size="lg"
        className="min-w-[200px]"
        onClick={() => window.open('https://app.yourplatform.com/signup', '_blank')}
      >
        Start Trading Now
      </GradientButton>
    </div>
  );
}