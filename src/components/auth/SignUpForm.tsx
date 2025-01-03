import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FormInput } from './form/FormInput';
import { PasswordInput } from './form/PasswordInput';
import { SubmitButton } from './form/SubmitButton';
import { SocialSignIn } from './social/SocialSignIn';
import { AuthLink } from './form/AuthLink';
import { usePasswordValidation } from '../../hooks/usePasswordValidation';
import { PasswordValidationList } from './PasswordValidationList';
import { ReferralStep } from './steps/ReferralStep';
import { SignUpStep } from './steps/SignUpStep';

type Step = 'referral' | 'signup';

export function SignUpForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('referral');
  const [isLoading, setIsLoading] = useState(false);

  const handleReferralComplete = () => {
    setCurrentStep('signup');
  };

  const handleSignUpComplete = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentStep === 'referral' ? (
        <ReferralStep onComplete={handleReferralComplete} />
      ) : (
        <SignUpStep onComplete={handleSignUpComplete} isLoading={isLoading} />
      )}
    </motion.div>
  );
}