import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { FormInput } from '../components/auth/form/FormInput';
import { PasswordInput } from '../components/auth/form/PasswordInput';
import { SubmitButton } from '../components/auth/form/SubmitButton';
import { SocialSignIn } from '../components/auth/social/SocialSignIn';
import { AuthLink } from '../components/auth/form/AuthLink';
import { TermsAcceptance } from '../components/auth/form/TermsAcceptance';

export function SignInPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: 'john@example.com',
    password: 'Test@123456',
    acceptTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your trading journey"
      animationSrc="https://cdn.rive.app/animations/login.riv"
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
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="john@example.com"
          error={errors.email}
          required
        />

        <PasswordInput
          label="Password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          placeholder="••••••••"
          error={errors.password}
          showForgotPassword
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
            Sign In
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </SubmitButton>

        <SocialSignIn />

        <AuthLink
          text="Don't have an account?"
          linkText="Create account"
          to="/signup"
        />

        <div className="text-center">
          <p className="text-sm text-gray-400">
            For testing, use:
            <br />
            Email: <span className="text-primary-light">john@example.com</span>
            <br />
            Password: <span className="text-primary-light">Test@123456</span>
          </p>
        </div>
      </motion.form>
    </AuthLayout>
  );
}