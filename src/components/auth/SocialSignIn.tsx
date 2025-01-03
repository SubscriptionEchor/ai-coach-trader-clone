import React from 'react';
import { cn } from '../../lib/utils';
import { GoogleSignInButton } from './GoogleSignInButton';

interface SocialSignInProps {
  className?: string;
}

export function SocialSignIn({ className }: SocialSignInProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 text-gray-400 bg-black">or continue with</span>
        </div>
      </div>

      {/* Social Buttons */}
      <GoogleSignInButton />
    </div>
  );
}