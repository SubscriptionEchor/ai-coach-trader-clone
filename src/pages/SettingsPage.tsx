import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { SettingsContent } from '../components/settings/SettingsContent';

export function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsContent />
    </DashboardLayout>
  );
}