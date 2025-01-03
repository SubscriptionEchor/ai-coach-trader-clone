import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { SupportContent } from '../components/support/SupportContent';

export function SupportPage() {
  return (
    <DashboardLayout>
      <SupportContent />
    </DashboardLayout>
  );
}