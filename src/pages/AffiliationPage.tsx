import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { AffiliationOverview } from '../components/affiliation/AffiliationOverview';

export function AffiliationPage() {
  return (
    <DashboardLayout>
      <AffiliationOverview />
    </DashboardLayout>
  );
}