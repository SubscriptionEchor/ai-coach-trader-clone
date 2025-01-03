
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Divider } from './Divider';
import { GoogleButton } from './GoogleButton';
import { authService } from '../../../lib/services/authService';

export function SocialSignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await authService.signInWithGoogle();
      
      // If on sign-in page, go directly to dashboard
      // Otherwise (sign-up), go to account creation success
      if (location.pathname === '/signin') {
        navigate('/dashboard');
      } else {
        navigate('/account-created');
      }
    } catch (error) {
      console.error('Google Sign-In failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Divider text="or continue with" />
      <GoogleButton onClick={handleGoogleSignIn} isLoading={isLoading} />
    </div>
  );
}
