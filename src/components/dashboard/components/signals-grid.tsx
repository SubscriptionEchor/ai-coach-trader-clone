import { motion } from 'framer-motion';
import { SignalCard } from './signals/signal-card';
import type { SignalData } from '../types';
import { useEffect, useState } from 'react';
import { tradingApi } from '@/services/api';



export function SignalsGrid() {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      let res = await tradingApi.getActiveSignals()
      if (res?.status) {
        setData(res?.data)
      }

    })()
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6 auto-rows-fr">
      {data.map((signal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full" // Ensure consistent height
        >
          <SignalCard {...signal} />
        </motion.div>
      ))}
    </div>
  );
}