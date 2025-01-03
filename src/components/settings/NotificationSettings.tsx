import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { cn } from '../../lib/utils';

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    signals: true,
    news: true,
    rewards: true,
    updates: false,
    marketing: false
  });

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      <div className="flex items-center gap-3 mb-6">
        <div className={cn(
          'p-2.5 rounded-lg',
          'bg-primary-light/10'
        )}>
          <Bell className="w-5 h-5 text-primary-light" />
        </div>
        <h2 className="text-xl font-semibold text-white">
          Notifications
        </h2>
      </div>

      <div className="space-y-4">
        {Object.entries(settings).map(([key, value]) => (
          <div
            key={key}
            className={cn(
              'p-4 rounded-lg',
              'bg-white/5 border border-white/10',
              'hover:border-white/20',
              'transition-colors'
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white capitalize">
                  {key} Notifications
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Receive notifications about {key}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => setSettings(prev => ({ ...prev, [key]: !prev[key] }))}
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
        ))}
      </div>
    </div>
  );
}