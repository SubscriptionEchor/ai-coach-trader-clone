import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Mail, Send, RefreshCw } from 'lucide-react';
import { AuthLayout } from '../AuthLayout';
import { cn } from '../../../lib/utils';

interface ForgotPasswordSuccessProps {
  email: string;
}

export function ForgotPasswordSuccess({ email }: ForgotPasswordSuccessProps) {
  const navigate = useNavigate();
  const [isResending, setIsResending] = useState(false);

  const handleResendLink = async () => {
    setIsResending(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Show success message or toast
    } finally {
      setIsResending(false);
    }
  };

  return (
    <AuthLayout
      title="Check Your Email"
      subtitle="We've sent you instructions to reset your password"
      animationSrc="https://cdn.rive.app/animations/email-sent.riv"
    >
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className={cn(
            'w-16 h-16 rounded-full',
            'bg-emerald-500/10 border border-emerald-500/20',
            'flex items-center justify-center'
          )}>
            <Mail className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-gray-400">
            We've sent a password reset link to:
          </p>
          <p className="text-lg font-medium text-white">
            {email}
          </p>
          <p className="text-sm text-gray-400">
            Please check your email and follow the instructions to reset your password.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4 mt-8">
          {/* Open Gmail Button */}
          <a 
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-center gap-2',
              'w-full px-6 py-3 rounded-lg',
              'bg-primary-light hover:bg-primary-light/90',
              'text-black font-medium',
              'transition-all duration-200',
              'group'
            )}
          >
            <Send className="w-5 h-5" />
            Open Gmail
          </a>

          {/* Resend Link Button */}
          <button 
            onClick={handleResendLink}
            disabled={isResending}
            className={cn(
              'flex items-center justify-center gap-2',
              'w-full px-6 py-3 rounded-lg',
              'bg-white/5 hover:bg-white/10',
              'border border-white/10 hover:border-white/20',
              'text-gray-400 hover:text-white',
              'transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            {isResending ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Resending...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                <span>Resend Link</span>
              </>
            )}
          </button>

          {/* Back to Sign In */}
          <button 
            onClick={() => navigate('/signin')}
            className={cn(
              'text-sm text-gray-400 hover:text-white',
              'transition-colors duration-200'
            )}
          >
            Back to Sign In
          </button>
        </div>
      </motion.div>
    </AuthLayout>
  );
}