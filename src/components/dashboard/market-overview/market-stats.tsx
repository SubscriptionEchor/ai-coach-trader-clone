import { calculatePercentageChange, formatMarketCap } from '@/lib/utils';
import { marketApi } from '@/services/api';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, LineChart, Tooltip, Line } from 'recharts';


const MarketStats = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      let result = await marketApi.getMarket()
      if (result?.status) {
        result = result?.data.map((data: any) => {
          return ({
            name: new Date(data.timestamp * 1000).toLocaleString(),
            value: data.marketCap,
            volume: data.volume
          })
        })
        setData(result)
      }
    })()
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Gradient border effect */}
      {/* <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" /> */}

      <div className="relative bg-[#111] rounded-xl p-5 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">Total Market Cap</h3>
          <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-sm font-medium">{calculatePercentageChange(Number(data[data?.length - 2]?.value), Number(data[data?.length - 1]?.value))}%</span>
          </div>
        </div>

        <div className="text-3xl font-bold mb-4">${formatMarketCap(Number(data[data?.length - 1]?.value))}</div>


        <ResponsiveContainer width="100%" height={40}>
          <LineChart className='absolute' data={data} style={{ height: '100%', position: 'absolute' }} margin={{ bottom: 0, top: 10, right: 1, left: 1 }}>
            <Tooltip content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className='bg-[#000000]'>
                    <p className='text-xs'>Market Cap: {payload[0].payload.value.toFixed(2)}</p>
                    <p className='text-xs'>Volume: {payload[0].payload.volume.toFixed(2)}</p>
                  </div>
                );
              }
              return null;
            }} />
            <Line type="monotone" dataKey="value"
              scale="linear" style={{ height: '100%' }} stroke="#FFD700" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        {/* <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 1, bottom: 1, left: 1 }}>
              <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none' }} />
              <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} dot={false} />
            </LineChart> */}
        {/* <AreaChart data={data}>
              <defs>
                <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={2}
                fill="url(#marketGradient)"
              />
            </AreaChart> */}
        {/* </ResponsiveContainer> */}
      </div>
    </motion.div>
  );
}
export default React.memo(MarketStats);