import React from 'react';
import { Divider } from './Divider';
import { GoogleButton } from './GoogleButton';
import { cn } from '../../../lib/utils';

interface SocialSignInProps {
  className?: string;
}

export function SocialSignIn({ className }: SocialSignInProps) {
  const handleGoogleSignIn = async () => {
    try {
      // TODO: Implement Google Sign-In
      console.log('Google Sign-In clicked');
    } catch (error) {
      console.error('Google Sign-In failed:', error);
    }
  };

  return (
    <div className={cn('space-y-6', className)}>
      <Divider text="or continue with" />
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}