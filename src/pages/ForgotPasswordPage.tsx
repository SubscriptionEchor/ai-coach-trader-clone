import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { FormInput } from '../components/auth/form/FormInput';
import { SubmitButton } from '../components/auth/form/SubmitButton';
import { AuthLink } from '../components/auth/form/AuthLink';
import { ForgotPasswordSuccess } from '../components/auth/forgot-password/ForgotPasswordSuccess';

export function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return <ForgotPasswordSuccess email={email} />;
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive password reset instructions"
      animationSrc="https://cdn.rive.app/animations/forgot-password.riv"
    >
      <motion.form 
        className="space-y-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          error={error}
          required
        />

        <SubmitButton 
          isLoading={isLoading}
          className="group"
        >
          <span className="flex items-center justify-center">
            Send Reset Link
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </SubmitButton>

        <AuthLink
          text="Remember your password?"
          linkText="Sign in"
          to="/signin"
        />
      </motion.form>
    </AuthLayout>
  );
}