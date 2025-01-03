import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { OTPVerificationForm } from '../components/auth/otp/OTPVerificationForm';

export function OTPVerificationPage() {
  return (
    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the verification code sent to your email"
      animationSrc="https://cdn.rive.app/animations/verification.riv"
    >
      <OTPVerificationForm />
    </AuthLayout>
  );
}