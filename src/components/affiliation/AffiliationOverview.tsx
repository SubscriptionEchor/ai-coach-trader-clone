import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, Clock } from 'lucide-react';
import { AffiliationProgram } from './AffiliationProgram';
import { BecomeAffiliateModal } from './BecomeAffiliateModal';
import { SuccessModal } from './SuccessModal';
import { RequestStatus } from './RequestStatus';
import { cn } from '../../lib/utils';

export function AffiliationOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<{
    email: string;
    status: 'pending' | 'approved' | 'rejected';
    date: string;
  } | null>(null);

  const handleApplicationSubmit = async (email: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsModalOpen(false);
    setShowSuccess(true);
    setApplicationStatus({
      email,
      status: 'pending',
      date: new Date().toISOString()
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white mb-2">
          Affiliation Program
        </h1>
        <p className="text-gray-400">
          Join our exclusive affiliation program and earn rewards
        </p>
      </div>

      {/* Application Status */}
      {applicationStatus && (
        <RequestStatus
          email={applicationStatus.email}
          status={applicationStatus.status}
          date={applicationStatus.date}
        />
      )}

      {/* Program Information */}
      <AffiliationProgram onJoinClick={() => setIsModalOpen(true)} />

      {/* Application Modal */}
      <BecomeAffiliateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleApplicationSubmit}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}