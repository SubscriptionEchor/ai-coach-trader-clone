import { ReferralNode } from './types';

export const sampleData: ReferralNode = {
  id: 'root',
  level: 1,
  users: [
    {
      id: '1',
      name: 'Alex Thompson',  // Who referred me
      date: '2024-01-15',
      earnings: '$850',
      referrals: 25
    }
  ],
  totalEarnings: '$850',
  totalReferrals: 25,
  children: [
    {
      id: 'level2',
      level: 2,
      users: [
        {
          id: '2',
          name: 'John Smith',
          date: '2024-02-10',
          earnings: '$450',
          referrals: 15
        },
        {
          id: '3',
          name: 'Sarah Wilson',
          date: '2024-02-09',
          earnings: '$660',
          referrals: 22
        },
        {
          id: '4',
          name: 'Mike Johnson',
          date: '2024-02-08',
          earnings: '$540',
          referrals: 18
        }
      ],
      totalEarnings: '$1,650',
      totalReferrals: 55,
      children: [
        {
          id: 'level3',
          level: 3,
          users: [
            {
              id: '5',
              name: 'Emma Davis',
              date: '2024-02-07',
              earnings: '$240',
              referrals: 8
            },
            {
              id: '6',
              name: 'James Brown',
              date: '2024-02-06',
              earnings: '$360',
              referrals: 12
            }
          ],
          totalEarnings: '$600',
          totalReferrals: 20,
          children: [
            {
              id: 'level4',
              level: 4,
              users: [],
              totalEarnings: '$2,450',
              totalReferrals: 85,
              children: [
                {
                  id: 'level5',
                  level: 5,
                  users: [],
                  totalEarnings: '$1,200',
                  totalReferrals: 45
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};