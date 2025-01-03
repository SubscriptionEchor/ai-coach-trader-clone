import React from 'react';
import { Send } from 'lucide-react';
import { cn } from '../../lib/utils';

export function FooterNewsletter() {
  return (
    <div className="lg:col-span-1">
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="text-gray-400 mb-6">
        Get the latest trading insights and updates delivered to your inbox.
      </p>
      
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className={cn(
              'w-full px-4 py-3 rounded-lg',
              'bg-white/5 border border-white/10',
              'text-white placeholder-gray-400',
              'focus:outline-none focus:border-primary-light/30',
              'transition-colors duration-200'
            )}
          />
        </div>
        
        <button 
          type="submit"
          className={cn(
            'flex items-center justify-center w-full',
            'px-6 py-3 rounded-lg',
            'bg-primary-light/10 hover:bg-primary-light/20',
            'border border-primary-light/20',
            'text-primary-light font-medium',
            'transition-all duration-200',
            'group'
          )}
        >
          Subscribe
          <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}