import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useTelegramStore } from '../../lib/store/telegramStore';
import { cn } from '../../lib/utils';

interface TelegramVerificationProps {
  username: string;
  onClose?: () => void;
}

export function TelegramVerification({ username, onClose }: TelegramVerificationProps) {
  const { connect, isVerifying } = useTelegramStore();
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerify = async () => {
    await connect(username);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Verify Connection</h3>
        <p className="text-gray-400">
          Enter the verification code sent to your Telegram
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Verification Code</label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value.trim())}
            placeholder="Enter code"
            className={cn(
              'w-full px-4 py-3 rounded-lg',
              'bg-white/5 border border-white/10',
              'text-white placeholder-gray-500',
              'focus:outline-none focus:border-[#0088cc]/30',
              'transition-colors'
            )}
          />
        </div>

        <button
          onClick={handleVerify}
          disabled={!verificationCode || isVerifying}
          className={cn(
            'flex items-center justify-center gap-2',
            'w-full px-6 py-3 rounded-lg',
            'bg-[#0088cc] hover:bg-[#0088cc]/90',
            'text-white font-medium',
            'transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'group'
          )}
        >
          {isVerifying ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Check className="w-5 h-5" />
              Verify Connection
            </>
          )}
        </button>
      </div>
    </div>
  );
}