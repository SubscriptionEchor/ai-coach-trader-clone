import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PasswordValidationListProps {
  validations: {
    hasMinLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
  };
}

export function PasswordValidationList({ validations }: PasswordValidationListProps) {
  const requirements = [
    { key: 'hasMinLength', label: 'At least 8 characters' },
    { key: 'hasUpperCase', label: 'One uppercase letter' },
    { key: 'hasLowerCase', label: 'One lowercase letter' },
    { key: 'hasNumber', label: 'One number' },
    { key: 'hasSpecialChar', label: 'One special character' },
  ];

  return (
    <div className="mt-2 space-y-2">
      {requirements.map(({ key, label }) => (
        <div 
          key={key} 
          className={cn(
            'flex items-center gap-2 text-sm',
            validations[key as keyof typeof validations] 
              ? 'text-emerald-400' 
              : 'text-gray-400'
          )}
        >
          {validations[key as keyof typeof validations] ? (
            <Check className="w-4 h-4" />
          ) : (
            <X className="w-4 h-4" />
          )}
          {label}
        </div>
      ))}
    </div>
  );
}