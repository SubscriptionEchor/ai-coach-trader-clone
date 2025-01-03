import React, { useState } from 'react';
import { SignalHistoryOverview } from './SignalHistoryOverview';
import { SignalHistoryTable } from './SignalHistoryTable';
import { Pagination } from '../../ui/Pagination';
import { paginateData } from '../../../lib/utils/pagination';
import { cn } from '../../../lib/utils';

// Generate 300 signals for demonstration
const generateSignals = () => {
  const pairs = ['ARPA/USDT', 'BTC/USDT', 'ETH/USDT', 'SOL/USDT'];
  const dates = [
    '2024-02-10', '2024-02-09', '2024-02-08',
    '2024-02-07', '2024-02-06'
  ];

  return Array.from({ length: 300 }, (_, index) => ({
    id: `signal-${index}`,
    pair: pairs[index % pairs.length],
    type: index % 2 === 0 ? ('long' as const) : ('spot' as const),
    time: '12:52 UST',
    date: dates[index % dates.length],
    entryPrice: '22,600',
    exitPrice: '23,800',
    stopLoss: '0.04542',
    leverage: index % 2 === 0 ? '4x' : '-',
    profit: `${(Math.random() * 30 + 10).toFixed(2)}%`,
    status: 'Closed',
  }));
};

const allSignals = generateSignals();
const PAGE_SIZE = 10;

export function SignalHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data: paginatedSignals, totalPages } = paginateData(
    allSignals,
    currentPage,
    PAGE_SIZE
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white mb-2">
          Signals History
        </h1>
        <p className="text-gray-400">
          View your past trading signals and performance
        </p>
      </div>

      {/* Overview Stats */}
      <SignalHistoryOverview />

      {/* Signals Table */}
      <SignalHistoryTable signals={paginatedSignals} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}