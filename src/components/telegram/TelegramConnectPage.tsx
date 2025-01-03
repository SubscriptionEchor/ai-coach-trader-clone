
import React, { useState } from 'react';
import { Send, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { TelegramChannelJoin } from './TelegramChannelJoin';

type Step = 'username' | 'channel' | 'success';

export function TelegramConnectPage() {
  const [step, setStep] = useState<Step>('username');
  const [username, setUsername] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  const handleConnect = async () => {
    // Validate username
    if (!username.trim()) {
      setError('Please enter your Telegram username');
      return;
    }

    setError('');
    setIsVerifying(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStep('channel');
    } catch (error) {
      setError('Failed to connect. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleChannelJoinComplete = () => {
    setStep('success');
  };

  if (step === 'channel') {
    return (
      <TelegramChannelJoin 
        username={username}
        onComplete={handleChannelJoinComplete}
      />
    );
  }

  if (step === 'success') {
    return (
      <div className="max-w-xl mx-auto">
        <div className={cn(
          'p-8 rounded-xl text-center',
          'bg-[#1d1d1d] border border-white/5'
        )}>
          <div className={cn(
            'w-16 h-16 mx-auto mb-6 rounded-full',
            'bg-emerald-500/10 border border-emerald-500/20',
            'flex items-center justify-center'
          )}>
            <Send className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Successfully Connected!
          </h2>
          <p className="text-gray-400">
            You will now receive trading signals in your Telegram account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className={cn(
        'p-8 rounded-xl',
        'bg-[#1d1d1d] border border-white/5',
        'relative overflow-hidden'
      )}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(51,144,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="relative">
          {/* Warning Notice */}
          <div className={cn(
            'p-4 rounded-lg mb-8',
            'bg-yellow-500/10 border border-yellow-500/20',
            'flex items-start gap-3'
          )}>
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-500">
              Your Telegram username cannot be changed after connecting. Please ensure you enter the correct username.
            </div>
          </div>

          {/* Connection Steps */}
          <div className="space-y-6 mb-8">
            <h3 className="text-sm font-medium text-gray-400">
              Follow these steps to connect:
            </h3>
            
            <div className="space-y-4">
              {[
                'Open Telegram and go to Settings',
                'Look for your username under your profile',
                'If you haven\'t set a username, create one now',
                'Enter your username below (without the @ symbol)'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={cn(
                    'flex-shrink-0 w-6 h-6 rounded-full',
                    'bg-[#0088cc]/10 text-[#0088cc]',
                    'flex items-center justify-center',
                    'text-sm font-medium'
                  )}>
                    {index + 1}
                  </div>
                  <p className="text-gray-300 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Username Input */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Telegram Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.trim())}
                  placeholder="username"
                  className={cn(
                    'w-full pl-8 pr-4 py-3 rounded-lg',
                    'bg-white/5 border border-white/10',
                    'text-white placeholder-gray-500',
                    'focus:outline-none focus:border-[#0088cc]/30',
                    'transition-colors',
                    error && 'border-red-500/50'
                  )}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
            </div>

            <button
              onClick={handleConnect}
              disabled={isVerifying}
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
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Connecting...</span>
                </div>
              ) : (
                <>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  Connect Telegram
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
