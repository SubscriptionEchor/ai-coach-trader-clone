import React from 'react';
import { cn } from '../../../lib/utils';

interface TermsAcceptanceProps {
  accepted: boolean;
  onChange: (accepted: boolean) => void;
  error?: string;
  className?: string;
}

export function TermsAcceptance({ accepted, onChange, error, className }: TermsAcceptanceProps) {
  return (
    <div className={className}>
      <label className={cn(
        'flex items-start gap-3 cursor-pointer',
        'text-sm text-gray-400'
      )}>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1"
        />
        <span>
          I accept the{' '}
          <a href="/terms" className="text-primary-light hover:underline" target="_blank">
            Terms of Service
          </a>
          {' '}and{' '}
          <a href="/privacy" className="text-primary-light hover:underline" target="_blank">
            Privacy Policy
          </a>
        </span>
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}