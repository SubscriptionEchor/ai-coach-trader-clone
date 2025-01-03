import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthForm } from '../components/auth/AuthForm';
import { AuthLink } from '../components/auth/form/AuthLink';

export function SignInPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your trading journey"
      animationSrc="https://cdn.rive.app/animations/login.riv"
    >
      <AuthForm mode="signin" />
      <AuthLink
        text="Don't have an account?"
        linkText="Create account"
        to="/signup"
        className="mt-6"
      />
    </AuthLayout>
  );
}