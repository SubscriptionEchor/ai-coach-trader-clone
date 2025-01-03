import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PasswordInput } from '../form/PasswordInput';
import { SubmitButton } from '../form/SubmitButton';
import { PasswordValidationList } from '../PasswordValidationList';
import { usePasswordValidation } from '../../../hooks/usePasswordValidation';
import { cn } from '../../../lib/utils';

export function SetNewPasswordForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { validations, isValid } = usePasswordValidation(formData.password);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isValid) {
      newErrors.password = 'Please meet all password requirements';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/signin');
    } catch (error) {
      setErrors({ submit: 'Failed to update password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form 
      className="space-y-6"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <PasswordInput
          label="New Password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          placeholder="Create a new password"
          error={errors.password}
          required
        />

        <PasswordValidationList validations={validations} />

        <PasswordInput
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
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
          Set New Password
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </span>
      </SubmitButton>
    </motion.form>
  );
}