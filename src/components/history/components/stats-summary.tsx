import { tradingApi } from '@/services/api';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useState } from 'react';

const StatCard = ({ title, children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-[#111] rounded-xl p-6 ${className}`}
  >
    <h2 className="text-lg font-medium text-gray-400 mb-4">{title}</h2>
    {children}
  </motion.div>
);

export function StatsSummary({ data, setAnlytics }) {
  const [selectedMonth, setSelectedMonth] = useState('January'); // Default month
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function generateMonthStrings(startMonthIndex) {
    const currentYear = new Date().getFullYear();
    const result = [];

    for (let i = startMonthIndex; i < months.length; i++) {
      // Format the month as an abbreviation (e.g., "Aug-2023")
      const monthAbbreviation = months[i] + '-' + currentYear;
      result.push(monthAbbreviation);
    }

    return result;
  }
  const monthStrings = generateMonthStrings(7)

  const onSelect = async (value) => {
    if (value == selectedMonth) {
      return
    }
    setSelectedMonth(value)
    let getIndex = value?.split('-')
    let monthInd = months.indexOf(getIndex[0])
    console.log(getIndex, 'ddkfhdkjf')
    // alert(JSON.stringify(e))
    let res = await tradingApi.getAnalytics({ month: monthInd + 1 + '-' + getIndex[1] })
    if (res?.status) {
      setAnlytics(res?.data)
    }

  }
  return (
    <div className="relative mb-12">

      <div className="flex  items-center justify-end mb-4">
        <label className="text-gray-400 mr-2">Select Month:</label>
        <select

          value={selectedMonth}
          onChange={(e) => onSelect(e?.target?.value)}
          className="bg-[#111] text-white text-sm border border-gray-600 rounded p-2 cursor-pointer"
        >
          {/* <div className=" left-0 mt-1 w-full max-h-400 overflow-y-auto bg-[#111] border border-gray-600 rounded shadow-lg z-10"> */}

          {monthStrings.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
          {/* </div> */}
        </select>
      </div >

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Summary Card */}
        <StatCard title="Summary">
          <div className="space-y-6">
            <div className="flex justify-between items-baseline">
              <span className="text-gray-400">Overall Trades</span>
              <span className="text-2xl font-bold">{data?.summary?.overall_trades}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-gray-400">Overall profit</span>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="text-green-500 w-4 h-4" />
                <span className="text-2xl font-bold text-green-500">${data?.summary?.overall_profit}</span>
              </div>
            </div>
            <div>
              <span className="text-gray-400 block mb-2">Market Risk</span>
              <div className="text-yellow-400 font-medium">{data?.summary?.market_risk}</div>
            </div>
            <div>
              <span className="text-gray-400 block mb-2">Most profitable coins</span>
              <div className="flex gap-2">
                {data?.summary?.most_profitable_coins?.map((coin, index) => (
                  <div
                    key={coin}
                    style={{ marginLeft: index > 0 ? -15 : 0 }}
                    className="w-8 h-8  rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center text-xs font-medium"
                  >
                    <img className='rounded-full' src={coin} alt={coin} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StatCard>

        {/* Total Trades Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <StatCard title="Total Trades" delay={0.1}>
            <div>
              <div className="text-3xl font-bold mb-2">{data?.monthly_stats?.total_trades}</div>
              <div className="text-gray-400">This month</div>
            </div>
          </StatCard>

          {/* Trade Ratio Card */}
          <StatCard title="Trade Ratio" delay={0.2}>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-bold mb-1">{data?.monthly_stats?.trade_ratio?.profit?.percentage}%</div>
                <div className="text-green-500 text-sm">{data?.monthly_stats?.trade_ratio?.profit?.count} Trades</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-1">{data?.monthly_stats?.trade_ratio?.loss?.percentage}%</div>
                <div className="text-red-500 text-sm">{data?.monthly_stats?.trade_ratio?.loss?.count} Trades</div>
              </div>
            </div>
          </StatCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* Win Rate Card */}
          <StatCard title="Win rate" delay={0.3}>
            <div>
              <div className="text-3xl font-bold mb-2">{data?.monthly_stats?.win_rate}%</div>
              <div className="text-gray-400">This month</div>
            </div>
          </StatCard>

          {/* Profit Card */}
          <StatCard title="Profit (Current month)" delay={0.4}>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="text-green-500 w-6 h-6" />
              <div className="text-2xl font-bold text-green-500">{data?.monthly_stats?.total_return}% Total Return</div>
            </div>
          </StatCard>
        </div>
      </div>
    </div >
  );
}