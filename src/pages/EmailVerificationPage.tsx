import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Mail, ArrowRight, RefreshCw } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { cn } from '../lib/utils';

export function EmailVerificationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'your email';
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleResendEmail = async () => {
    setIsResending(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Show success message or toast
    } finally {
      setIsResending(false);
    }
  };

  const handleVerificationCheck = async () => {
    setIsVerifying(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <AuthLayout
      title="Verify Your Email"
      subtitle="We've sent you a verification link"
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
            We've sent a verification link to:
          </p>
          <p className="text-lg font-medium text-white">
            {email}
          </p>
          <p className="text-sm text-gray-400">
            Please check your email and click the verification link to continue.
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
            Open Gmail
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* I've Verified Button */}
          <button
            onClick={handleVerificationCheck}
            disabled={isVerifying}
            className={cn(
              'flex items-center justify-center gap-2',
              'w-full px-6 py-3 rounded-lg',
              'bg-emerald-500/10 hover:bg-emerald-500/20',
              'border border-emerald-500/20',
              'text-emerald-500 font-medium',
              'transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            {isVerifying ? (
              <>
                <div className="w-5 h-5 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Check className="w-5 h-5" />
                I've Verified My Email
              </>
            )}
          </button>

          {/* Resend Link Button */}
          <button
            onClick={handleResendEmail}
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
                Resending...
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                Resend Verification Link
              </>
            )}
          </button>
        </div>
      </motion.div>
    </AuthLayout>
  );
}