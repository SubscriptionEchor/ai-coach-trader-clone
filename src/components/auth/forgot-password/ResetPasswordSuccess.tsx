import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { AuthLayout } from '../AuthLayout';
import { cn } from '../../../lib/utils';

export function ResetPasswordSuccess() {
  return (
    <AuthLayout
      title="Password Reset Complete"
      subtitle="Your password has been successfully reset"
      animationSrc="https://cdn.rive.app/animations/success.riv"
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
            <Check className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-400">
          You can now sign in to your account with your new password.
        </p>

        {/* Action */}
        <a 
          href="/signin"
          className={cn(
            'flex items-center justify-center gap-2',
            'w-full px-6 py-3 rounded-lg',
            'bg-primary-light hover:bg-primary-light/90',
            'text-black font-medium',
            'transition-all duration-200',
            'group'
          )}
        >
          Continue to Sign In
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </AuthLayout>
  );
}