import React from 'react';
import { Brain } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';
import { cn } from '../../lib/utils';
import Logo from '../../assets/svg/logo.svg';

export function FooterTop() {
  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8',
        'p-6 sm:p-8 lg:p-12 rounded-2xl',
        'bg-gradient-to-r from-primary-light/10 via-transparent to-transparent',
        'border border-primary-light/10'
      )}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 sm:gap-6 text-center sm:text-left">
        <div
          className={cn(
            'p-3.5 rounded-xl',
            'bg-primary-light/10',
            'flex-shrink-0'
          )}
        >
          <img height={50} width={50} src={Logo} alt="logo" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Ready to get started?
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Join thousands of traders using our AI signals
          </p>
        </div>
      </div>

      <GradientButton
        variant="primary"
        size="lg"
        className={cn('min-w-[200px] w-full sm:w-auto', 'whitespace-nowrap')}
        onClick={() =>
          window.open('https://app.yourplatform.com/signup', '_blank')
        }
      >
        Start Trading Now
      </GradientButton>
    </div>
  );
}
