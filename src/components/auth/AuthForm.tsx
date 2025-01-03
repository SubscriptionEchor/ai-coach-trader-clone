
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FormInput } from './form/FormInput';
import { PasswordInput } from './form/PasswordInput';
import { SubmitButton } from './form/SubmitButton';
import { SocialSignIn } from './social/SocialSignIn';
import { TermsAcceptance } from './form/TermsAcceptance';
import { authService } from '../../lib/services/authService';

interface AuthFormProps {
  mode: 'signin' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (mode === 'signup' && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.acceptTerms) {
      newErrors.terms = 'You must accept the Terms of Service and Privacy Policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      if (mode === 'signup') {
        await authService.signUpWithEmail(formData.email, formData.password);
        navigate('/account-created');
      } else {
        await authService.signInWithEmail(formData.email, formData.password);
        navigate('/dashboard');
      }
    } catch (error) {
      setErrors({ submit: 'Authentication failed. Please try again.' });
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
      {mode === 'signup' && (
        <FormInput
          label="Display Name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Enter your name"
          error={errors.name}
          required
        />
      )}

      <FormInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Enter your email"
        error={errors.email}
        required
      />

      <PasswordInput
        label="Password"
        value={formData.password}
        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
        placeholder={mode === 'signup' ? 'Create a password' : 'Enter your password'}
        error={errors.password}
        showForgotPassword={mode === 'signin'}
        required
      />

      <TermsAcceptance
        accepted={formData.acceptTerms}
        onChange={(accepted) => setFormData(prev => ({ ...prev, acceptTerms: accepted }))}
        error={errors.terms}
      />

      <SubmitButton 
        isLoading={isLoading}
        className="group"
      >
        <span className="flex items-center justify-center">
          {mode === 'signup' ? 'Create Account' : 'Sign In'}
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </span>
      </SubmitButton>

      <SocialSignIn />
    </motion.form>
  );
}
