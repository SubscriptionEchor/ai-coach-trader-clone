import React, { useState } from 'react';
import { Lock, Shield } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SecuritySettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      <h2 className="text-xl font-semibold text-white mb-6">
        Security Settings
      </h2>

      <div className="space-y-8">
        {/* Password Change */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">
            Change Password
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg',
                    'bg-white/5 border border-white/10',
                    'text-white placeholder-gray-500',
                    'focus:outline-none focus:border-primary-light/30',
                    'transition-colors'
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showCurrentPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg',
                    'bg-white/5 border border-white/10',
                    'text-white placeholder-gray-500',
                    'focus:outline-none focus:border-primary-light/30',
                    'transition-colors'
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showNewPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={cn(
                'px-6 py-3 rounded-lg',
                'bg-primary-light hover:bg-primary-light/90',
                'text-black font-medium',
                'transition-colors'
              )}
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Two-Factor Authentication */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">
            Two-Factor Authentication
          </h3>
          <div className={cn(
            'p-4 rounded-lg',
            'bg-white/5 border border-white/10'
          )}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary-light" />
                <div>
                  <p className="font-medium text-white">
                    Two-Factor Authentication
                  </p>
                  <p className="text-sm text-gray-400">
                    Add an extra layer of security to your account
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                  className="sr-only peer"
                />
                <div className={cn(
                  'w-11 h-6 rounded-full',
                  'bg-gray-700 peer-checked:bg-primary-light',
                  'after:content-[""] after:absolute after:top-[2px] after:left-[2px]',
                  'after:bg-white after:rounded-full after:h-5 after:w-5',
                  'after:transition-all peer-checked:after:translate-x-full'
                )} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}