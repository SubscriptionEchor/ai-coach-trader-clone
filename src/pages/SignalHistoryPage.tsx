import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { SignalHistory } from '../components/dashboard/history/SignalHistory';

export function SignalHistoryPage() {
  return (
    <DashboardLayout>
      <SignalHistory />
    </DashboardLayout>
  );
}