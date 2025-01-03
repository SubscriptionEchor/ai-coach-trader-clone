import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ReferralOverview } from '../components/referral/ReferralOverview';

export function ReferralPage() {
  return (
    <DashboardLayout>
      <ReferralOverview />
    </DashboardLayout>
  );
}