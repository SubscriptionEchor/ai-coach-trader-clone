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

export function SignUpPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    referralCode: 'DEMO123',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'Test@123456',
    acceptTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.referralCode.trim()) {
      newErrors.referralCode = 'Referral code is required';
    }
    
    if (!formData.name.trim()) {
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your trading journey with AI-powered signals"
      animationSrc="https://cdn.rive.app/animations/signup.riv"
    >
      <motion.form 
        className="space-y-8"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Referral Code */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Referral Code
          </label>
          <input
            type="text"
            value={formData.referralCode}
            onChange={(e) => setFormData(prev => ({ ...prev, referralCode: e.target.value.toUpperCase() }))}
            placeholder="Enter referral code"
            className={cn(
              'w-full px-4 py-3 rounded-lg text-center uppercase tracking-widest',
              'bg-white/5 border border-white/10',
              'text-white placeholder-gray-400',
              'focus:outline-none focus:border-primary-light/30',
              'transition-colors duration-200',
              errors.referralCode && 'border-red-500/50'
            )}
            maxLength={10}
          />
          {errors.referralCode && (
            <p className="mt-1 text-sm text-red-500">{errors.referralCode}</p>
          )}
          <p className="mt-2 text-sm text-gray-400">
            For testing, use: <span className="text-primary-light font-medium">DEMO123</span>
          </p>
        </div>

        <div className="h-px bg-white/5" />

        {/* Account Details */}
        <div className="space-y-6">
          <FormInput
            label="Display Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="John Doe"
            error={errors.name}
            required
          />

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
              Create Account
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </SubmitButton>

          <SocialSignIn />

          <AuthLink
            text="Already have an account?"
            linkText="Sign in"
            to="/signin"
          />
        </div>
      </motion.form>
    </AuthLayout>
  );
}