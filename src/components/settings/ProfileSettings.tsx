import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ProfileSettings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  // Get device timezone
  const deviceTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      <h2 className="text-xl font-semibold text-white mb-6">
        Profile Settings
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar Display */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-primary-light/10 flex items-center justify-center">
            <span className="text-2xl text-primary-light font-semibold">
              {formData.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Profile Photo</h3>
            <p className="text-sm text-gray-400">
              Your profile initial will be displayed
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Display Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={cn(
                'w-full px-4 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
                'text-white placeholder-gray-500',
                'focus:outline-none focus:border-primary-light/30',
                'transition-colors'
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={cn(
                'w-full px-4 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
                'text-white placeholder-gray-500',
                'focus:outline-none focus:border-primary-light/30',
                'transition-colors'
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Timezone
            </label>
            <input
              type="text"
              value={deviceTimezone}
              disabled
              className={cn(
                'w-full px-4 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
                'text-gray-400',
                'cursor-not-allowed'
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Language
            </label>
            <input
              type="text"
              value="English"
              disabled
              className={cn(
                'w-full px-4 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
                'text-gray-400',
                'cursor-not-allowed'
              )}
            />
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
          Save Changes
        </button>
      </form>
    </div>
  );
}