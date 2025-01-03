import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PasswordInput } from '../form/PasswordInput';
import { SubmitButton } from '../form/SubmitButton';
import { PasswordValidationList } from '../PasswordValidationList';
import { cn } from '../../../lib/utils';

interface ResetPasswordFormProps {
  formData: {
    password: string;
    confirmPassword: string;
  };
  errors: Record<string, string>;
  validations: {
    hasMinLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
  };
  isValid: boolean;
  isLoading: boolean;
  onChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ResetPasswordForm({
  formData,
  errors,
  validations,
  isValid,
  isLoading,
  onChange,
  onSubmit
}: ResetPasswordFormProps) {
  return (
    <motion.form 
      className="space-y-6"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <PasswordInput
          label="New Password"
          value={formData.password}
          onChange={(e) => onChange('password', e.target.value)}
          placeholder="Create a new password"
          error={errors.password}
          required
        />

        <PasswordValidationList validations={validations} />

        <PasswordInput
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => onChange('confirmPassword', e.target.value)}
          placeholder="Confirm your new password"
          error={errors.confirmPassword}
          required
        />
      </div>

      {errors.submit && (
        <p className="text-sm text-red-500 text-center">{errors.submit}</p>
      )}

      <SubmitButton 
        isLoading={isLoading}
        disabled={!isValid || isLoading}
        className="group"
      >
        <span className="flex items-center justify-center">
          Reset Password
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </span>
      </SubmitButton>
    </motion.form>
  );
}