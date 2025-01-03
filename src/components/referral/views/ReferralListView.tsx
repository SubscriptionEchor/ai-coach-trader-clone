import React from 'react';
import { ReferralSection } from './ReferralSection';
import { ReferralSummary } from './ReferralSummary';
import { cn } from '../../../lib/utils';

// Sample data structure
const referralData = {
  referrer: {
    name: "Alex Thompson",
    date: "2024-01-15",
    earnings: "$850",
    referrals: 25
  },
  currentUser: {
    name: "You",
    date: "2024-02-01",
    earnings: "$2,450",
    referrals: 124
  },
  levels: [
    {
      level: 1,
      users: [
        { name: "John Smith", date: "2024-02-10", earnings: "$450", referrals: 15 },
        { name: "Sarah Wilson", date: "2024-02-09", earnings: "$660", referrals: 22 },
        { name: "Mike Johnson", date: "2024-02-08", earnings: "$540", referrals: 18 },
        { name: "Emma Davis", date: "2024-02-07", earnings: "$240", referrals: 8 },
        { name: "James Brown", date: "2024-02-06", earnings: "$360", referrals: 12 }
      ],
      totalUsers: 15,
      totalEarnings: "$2,250"
    },
    {
      level: 2,
      users: [
        { name: "Lisa Chen", date: "2024-02-05", earnings: "$320", referrals: 10 },
        { name: "David Kim", date: "2024-02-04", earnings: "$280", referrals: 9 },
        { name: "Anna Lee", date: "2024-02-03", earnings: "$410", referrals: 14 },
        { name: "Tom Wilson", date: "2024-02-02", earnings: "$390", referrals: 13 },
        { name: "Mary Johnson", date: "2024-02-01", earnings: "$340", referrals: 11 }
      ],
      totalUsers: 45,
      totalEarnings: "$4,500"
    },
    { level: 3, totalUsers: 128, totalEarnings: "$12,800" },
    { level: 4, totalUsers: 256, totalEarnings: "$25,600" },
    { level: 5, totalUsers: 512, totalEarnings: "$51,200" },
    { level: 6, totalUsers: 1024, totalEarnings: "$102,400" },
    { level: 7, totalUsers: 2048, totalEarnings: "$204,800" }
  ]
};

export function ReferralListView() {
  return (
    <div className="space-y-8">
      {/* Referrer */}
      <ReferralSection
        title="Referred by"
        user={referralData.referrer}
        variant="referrer"
      />

      {/* Current User */}
      <ReferralSection
        title="Your Account"
        user={referralData.currentUser}
        variant="user"
      />

      {/* Detailed Levels (1-2) */}
      {referralData.levels.slice(0, 2).map((level) => (
        <ReferralSection
          key={level.level}
          title={`Level ${level.level} Referrals`}
          users={level.users}
          totalUsers={level.totalUsers}
          totalEarnings={level.totalEarnings}
          variant="level"
        />
      ))}

      {/* Summary Levels (3-7) */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Extended Network</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {referralData.levels.slice(2).map((level) => (
            <ReferralSummary
              key={level.level}
              level={level.level}
              totalUsers={level.totalUsers}
              totalEarnings={level.totalEarnings}
            />
          ))}
        </div>
      </div>
    </div>
  );
}