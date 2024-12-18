import { DashboardLayout } from '../dashboard/layout';
import { HistoryHeader } from './components/history-header';
import { StatsSummary } from './components/stats-summary';
import { SignalsTable } from './components/signals-table';
import { useEffect, useState } from 'react';
import { marketApi, tradingApi } from '@/services/api';

export function SignalsHistory() {
  const [analytics, setAnlytics] = useState([])
  const [history, setHistory] = useState([])

  useEffect(() => {
    (async () => {
      let tradingApiAnalytics = await tradingApi.getAnalytics()
      if (tradingApiAnalytics?.status) {
        setAnlytics(tradingApiAnalytics?.data)
      }
      let tradingApiHistory = await tradingApi.getHistory()
      if (tradingApiHistory?.status) {
        setHistory(tradingApiHistory?.data)
      }
    })()
  }, [])
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
        <HistoryHeader />
        <StatsSummary data={analytics} setAnlytics={setAnlytics} />

        {/* Signals Table */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">All signals</h2>

          <SignalsTable data={history} setHistory={setHistory} />
        </div>
      </div>
    </DashboardLayout>
  );
}