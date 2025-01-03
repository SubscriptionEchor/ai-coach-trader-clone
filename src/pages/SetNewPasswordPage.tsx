import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { SetNewPasswordForm } from '../components/auth/password/SetNewPasswordForm';

export function SetNewPasswordPage() {
  return (
    <AuthLayout
      title="Set New Password"
      subtitle="Create a strong password for your account"
      animationSrc="https://cdn.rive.app/animations/password.riv"
    >
      <SetNewPasswordForm />
    </AuthLayout>
  );
}