import React, { useState } from 'react';
import { User, Camera } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ProfileSettings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    timezone: 'UTC+0',
    language: 'en'
  });

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
        {/* Avatar Upload */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary-light/10 flex items-center justify-center">
              <span className="text-2xl text-primary-light font-semibold">
                {formData.name.charAt(0)}
              </span>
            </div>
            <button
              type="button"
              className={cn(
                'absolute -bottom-2 -right-2',
                'p-2 rounded-full',
                'bg-primary-light text-black',
                'hover:bg-primary-light/90',
                'transition-colors'
              )}
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Profile Photo</h3>
            <p className="text-sm text-gray-400">
              Upload a new profile photo
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
            <select
              value={formData.timezone}
              onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
              className={cn(
                'w-full px-4 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
                'text-white',
                'focus:outline-none focus:border-primary-light/30',
                'transition-colors'
              )}
            >
              <option value="UTC+0">UTC+0 London</option>
              <option value="UTC+1">UTC+1 Berlin</option>
              <option value="UTC-5">UTC-5 New York</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Language
            </label>
            <select
              value={formData.language}
              onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
              className={cn(
                'w-full px-4 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
                'text-white',
                'focus:outline-none focus:border-primary-light/30',
                'transition-colors'
              )}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
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