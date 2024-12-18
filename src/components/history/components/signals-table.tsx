import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { getFormattedDateFromTimestamp } from '@/lib/utils';
import { tradingApi } from '@/services/api';
import { useEffect, useState } from 'react';

export function SignalsTable({ data, setHistory }) {
  const [page, setPage] = useState(1)
  const [stack, setStack] = useState([])

  useEffect(() => {
    if (data?.last_key) {
      if (stack[stack.length - 1]?.id == data?.last_key?.id) {
        return
      }
      setStack(prev => [...prev, data?.last_key])
    }

  }, [data?.last_key])

  const onClickPrev = async () => {
    if (page <= 1) {
      return
    }
    // Create a copy of the stack
    const newStack = [...stack];
    newStack.pop();
    newStack.pop()
    const previousKey = newStack[newStack.length - 1] || null;

    // Update the stack
    setStack(newStack);
    const payload = previousKey || {};

    try {
      const result = await tradingApi.getHistory(payload);
      if (result?.status) {
        setHistory(result.data);
        if (page == 1) {
          return
        }
        setPage(p => p - 1)
      }
    } catch (error) {
      console.error('Error fetching previous data:', error);
    }
  };
  const onClickNext = async () => {
    let length = page * (data?.signals?.length)
    if (length >= data?.total) {
      return
    }
    let result = await tradingApi.getHistory(data?.last_key)
    if (result?.status) {
      setHistory(result?.data)
      setPage(prev => prev + 1)
    }

  }

  return (
    <div className="w-full relative ">
      <div className="overflow-x-auto">
        <table className="w-full relative">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                Trade
              </th>
              <th className="sticky left-[-1px] bg-black  lg:bg-transparent z-20 text-left py-4 px-6 text-sm font-medium text-gray-400">
                Coin name
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Entry</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Exit</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Type</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">P/L (%)</th>
            </tr>
          </thead>
          <tbody>
            {data?.signals?.map((signal, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-white/10 hover:bg-white/5 z-100"
              >
                <td className="py-4 px-6">
                  {signal.pnl > 0 ? (
                    <ArrowUpRight className="w-5 h-5 text-nowrap text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-5 h-5 text-nowrap text-red-500" />
                  )}
                </td>
                <td className="sticky left-[-1px] bg-black lg:bg-transparent z-0 py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={signal.image}
                      alt={signal.symbol}
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-nowrap">{signal.symbol}</div>
                      <div className="text-sm text-nowrap text-gray-500">
                        {getFormattedDateFromTimestamp(signal.created_at)}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-nowrap">${signal.entry?.join('/ $')}</td>
                <td className="py-4 px-6 text-nowrap">${signal.exit?.join('/ $')}</td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 text-nowrap rounded-full text-sm bg-purple-500/20 text-purple-400">
                    {signal.signalType}
                  </span>
                </td>
                <td className={`py-4 px-6 text-nowrap text-right ${signal.pnl > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                  {signal.pnl}%
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <table className="min-w-[800px] w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Trade</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Coin name</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Entry</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Exit</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Type</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">P/L</th>
              </tr>
            </thead>
            <tbody>
              {data?.signals?.map((signal, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="py-4 px-6">
                    {signal.pnl > 0 ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={signal.image}
                        alt={signal.symbol}
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <div className="font-medium">{signal.symbol}</div>
                        <div className="text-sm text-gray-500">{getFormattedDateFromTimestamp(signal.created_at)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">${signal.entry?.join('/ $')}</td>
                  <td className="py-4 px-6">${signal.exit?.join('/ $')}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400">
                      {signal.signalType}
                    </span>
                  </td>
                  <td className={`py-4 px-6 text-right ${signal.pnl > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {signal.pnl}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}



      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Showing {page == 1 ? page : (page - 1) * (data?.signals?.length) + 1}-{page > 1 ? page * data?.signals?.length : data?.signals?.length} of {data?.total} trades
        </p>
        <div className="flex gap-2">
          <button disabled={page == 1} onClick={onClickPrev} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            Previous
          </button>
          <button disabled={page * (data?.signals?.length) == data?.total} onClick={onClickNext} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}