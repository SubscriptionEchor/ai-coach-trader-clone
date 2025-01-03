import React from 'react';
import { cn } from '../../../lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormInput({ label, error, className, ...props }: FormInputProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        {...props}
        className={cn(
          'w-full px-4 py-3 rounded-lg',
          'bg-white/5 border border-white/10',
          'text-white placeholder-gray-400',
          'focus:outline-none focus:border-primary-light/30',
          'transition-colors duration-200',
          error && 'border-red-500/50',
          className
        )}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}