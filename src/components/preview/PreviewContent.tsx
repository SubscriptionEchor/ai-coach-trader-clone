import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { gradients } from '../../lib/constants/gradients';

export function PreviewContent() {
  return (
    <div className="max-w-xl">
      <div className="text-sm font-medium text-indigo-400 mb-4 uppercase tracking-wider">
        AI-Powered Trading Signals
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Trade Smarter with{' '}
        <span className={`${gradients.text} bg-clip-text text-transparent`}>
          AI-Generated
        </span>{' '}
        Signals
      </h2>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        Our advanced AI algorithms analyze market patterns 24/7 to deliver high-probability trading signals directly to your Telegram. Join thousands of traders making data-driven decisions.
      </p>
      <Button variant="telegram" className="group">
        Join Telegram Channel
        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}