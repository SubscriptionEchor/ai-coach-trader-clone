import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';

// Sample data
const affiliates = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    signups: 45,
    earnings: '$1,250',
    status: 'active',
    joinedDate: '2024-02-10'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    signups: 32,
    earnings: '$890',
    status: 'active',
    joinedDate: '2024-02-09'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    signups: 28,
    earnings: '$720',
    status: 'inactive',
    joinedDate: '2024-02-08'
  }
];

export function AffiliationTable() {
  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Affiliates
        </h2>

        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search affiliates..."
            className={cn(
              'w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg',
              'bg-white/5 border border-white/10',
              'text-white placeholder-gray-400',
              'focus:outline-none focus:border-primary-light/30',
              'transition-colors'
            )}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Name</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Email</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Signups</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Earnings</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Status</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Joined</th>
            </tr>
          </thead>
          <tbody>
            {affiliates.map((affiliate) => (
              <tr 
                key={affiliate.id}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light/10 flex items-center justify-center">
                      <span className="text-primary-light font-medium">
                        {affiliate.name[0]}
                      </span>
                    </div>
                    <span className="font-medium text-white">{affiliate.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-400">{affiliate.email}</td>
                <td className="py-4 px-4 text-white">{affiliate.signups}</td>
                <td className="py-4 px-4 text-emerald-500 font-medium">{affiliate.earnings}</td>
                <td className="py-4 px-4">
                  <span className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium',
                    affiliate.status === 'active' 
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : 'bg-gray-500/10 text-gray-400'
                  )}>
                    {affiliate.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-400">{affiliate.joinedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <nav className="flex items-center gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={cn(
                'w-10 h-10 rounded-lg',
                'flex items-center justify-center',
                'text-sm font-medium',
                'transition-colors duration-200',
                page === 1 ? [
                  'bg-primary-light/10',
                  'text-primary-light',
                  'border border-primary-light/20'
                ] : [
                  'bg-white/5 hover:bg-white/10',
                  'text-gray-400 hover:text-white',
                  'border border-white/10'
                ]
              )}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}