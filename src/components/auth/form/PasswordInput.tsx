import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showForgotPassword?: boolean;
}

export function PasswordInput({ 
  label, 
  error,
  showForgotPassword,
  className,
  ...props 
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={props.id} className="block text-sm font-medium">
          {label}
        </label>
        {showForgotPassword && (
          <a 
            href="/forgot-password" 
            className="text-sm text-primary-light hover:text-primary-light/80"
          >
            Forgot password?
          </a>
        )}
      </div>
      <div className="relative">
        <input
          {...props}
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'bg-white/5 border border-white/10',
            'text-white placeholder-gray-400',
            'focus:outline-none focus:border-primary-light/30',
            'transition-colors duration-200',
            'pr-12',
            error && 'border-red-500/50',
            className
          )}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}