import React, { useState } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthForm } from '../components/auth/AuthForm';
import { ReferralCodeForm } from '../components/auth/ReferralCodeForm';
import { AuthLink } from '../components/auth/form/AuthLink';

export function SignUpPage() {
  const [hasReferralCode, setHasReferralCode] = useState(false);

  return (
    <AuthLayout
      title={hasReferralCode ? "Create your account" : "Verify Referral"}
      subtitle={hasReferralCode 
        ? "Start your trading journey with AI-powered signals"
        : "Enter your referral code to get started"
      }
      animationSrc="https://cdn.rive.app/animations/signup.riv"
    >
      {hasReferralCode ? (
        <>
          <AuthForm mode="signup" />
          <AuthLink
            text="Already have an account?"
            linkText="Sign in"
            to="/signin"
            className="mt-6"
          />
        </>
      ) : (
        <ReferralCodeForm onSuccess={() => setHasReferralCode(true)} />
      )}
    </AuthLayout>
  );
}