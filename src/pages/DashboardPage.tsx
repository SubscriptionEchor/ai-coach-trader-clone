import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { SignalsOverview } from '../components/dashboard/SignalsOverview';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <SignalsOverview />
    </DashboardLayout>
  );
}