import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { SubmitButton } from '../form/SubmitButton';
import { cn } from '../../../lib/utils';

export function OTPVerificationForm() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter a valid OTP');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/set-new-password');
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Show success message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* OTP Input */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-4">
            Enter Verification Code
          </label>
          <div className="flex gap-3 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                className={cn(
                  'w-12 h-12 text-center rounded-lg',
                  'bg-white/5 border border-white/10',
                  'text-white text-xl font-medium',
                  'focus:outline-none focus:border-primary-light/30',
                  'transition-colors'
                )}
              />
            ))}
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
          )}
        </div>

        <SubmitButton 
          isLoading={isLoading}
          className="group"
        >
          <span className="flex items-center justify-center">
            Verify OTP
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </SubmitButton>
      </form>

      {/* Resend OTP */}
      <button
        onClick={handleResendOTP}
        disabled={isLoading}
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
        <RefreshCw className="w-5 h-5" />
        Resend OTP
      </button>
    </motion.div>
  );
}