import React from 'react';
import { ProfileSettings } from './ProfileSettings';
import { NotificationSettings } from './NotificationSettings';
import { SecuritySettings } from './SecuritySettings';
import { cn } from '../../lib/utils';

export function SettingsContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-400">
          Manage your account preferences and security settings
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <ProfileSettings />
          <SecuritySettings />
        </div>

        {/* Sidebar */}
        <div>
          <NotificationSettings />
        </div>
      </div>
    </div>
  );
}