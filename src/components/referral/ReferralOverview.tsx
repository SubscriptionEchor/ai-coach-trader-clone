
import React, { useState } from 'react';
import { ReferralStats } from './ReferralStats';
import { ReferralCode } from './ReferralCode';
import { ReferralListView } from './views/ReferralListView';
import { ReferralTreeVisualization } from './ReferralTreeVisualization';
import { EarningsOverview } from './earnings/EarningsOverview';
import { EarningsPreview } from './earnings/EarningsPreview';
import { ReferralNavigation } from './ReferralNavigation';
import { cn } from '../../lib/utils';

type ViewType = 'overview' | 'tree' | 'earnings';

export function ReferralOverview() {
  const [activeView, setActiveView] = useState<ViewType>('overview');

  const renderContent = () => {
    switch (activeView) {
      case 'tree':
        return <ReferralTreeVisualization />;
      case 'earnings':
        return <EarningsOverview />;
      default:
        return (
          <>
            <ReferralStats />
            <EarningsPreview />
            <ReferralCode />
            <ReferralListView />
          </>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-2">
            Referral Program
          </h1>
          <p className="text-gray-400">
            Earn rewards by inviting other traders to join our platform
          </p>
        </div>
        <ReferralNavigation 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
      </div>

      {/* Content */}
      <div className="space-y-6">
        {renderContent()}
      </div>
    </div>
  );
}
