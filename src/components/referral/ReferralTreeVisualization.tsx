import React from 'react';
import { NetworkTree } from './tree/NetworkTree';
import { NetworkBackground } from './tree/NetworkBackground';
import { cn } from '../../lib/utils';

// Sample data structure for the network tree
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
        { name: "Mike Johnson", date: "2024-02-08", earnings: "$540", referrals: 18 }
      ],
      totalUsers: 15,
      totalEarnings: "$2,250"
    },
    {
      level: 2,
      users: [
        { name: "Lisa Chen", date: "2024-02-05", earnings: "$320", referrals: 10 },
        { name: "David Kim", date: "2024-02-04", earnings: "$280", referrals: 9 },
        { name: "Anna Lee", date: "2024-02-03", earnings: "$410", referrals: 14 }
      ],
      totalUsers: 45,
      totalEarnings: "$4,500"
    },
    { 
      level: 3, 
      totalUsers: 128, 
      totalEarnings: "$12,800" 
    },
    { 
      level: 4, 
      totalUsers: 256, 
      totalEarnings: "$25,600" 
    },
    { 
      level: 5, 
      totalUsers: 512, 
      totalEarnings: "$51,200" 
    },
    { 
      level: 6, 
      totalUsers: 1024, 
      totalEarnings: "$102,400" 
    },
    { 
      level: 7, 
      totalUsers: 2048, 
      totalEarnings: "$204,800" 
    }
  ]
};

export function ReferralTreeVisualization() {
  return (
    <div className={cn(
      'relative',
      'w-full overflow-x-auto',
      'scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent'
    )}>
      {/* Horizontal Scroll Container */}
      <div className={cn(
        'min-w-[1000px]', // Minimum width to prevent squishing
        'p-8',
        'relative' // For background effects
      )}>
        {/* Background Effects */}
        <NetworkBackground />

        {/* Network Tree */}
        <div className="relative">
          <NetworkTree data={referralData} />
        </div>
      </div>

      {/* Mobile Scroll Hint */}
      <div className={cn(
        'text-center text-sm text-gray-400 mt-4',
        'md:hidden' // Only show on mobile
      )}>
        Scroll horizontally to view more
      </div>
    </div>
  );
}