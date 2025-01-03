import React from 'react';
import { cn } from '../../lib/utils';

export function FooterBottom() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={cn(
      'flex flex-col sm:flex-row justify-between items-center gap-6',
      'pt-8 border-t border-white/10',
      'text-[15px] text-gray-400'
    )}>
      <div>
        © {currentYear} Your Company. All rights reserved.
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        <a href="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-white transition-colors">
          Terms of Service
        </a>
        <a href="/cookies" className="hover:text-white transition-colors">
          Cookie Policy
        </a>
      </div>
    </div>
  );
}