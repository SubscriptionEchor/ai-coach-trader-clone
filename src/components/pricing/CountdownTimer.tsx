import React, { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [days, setDays] = useState(7);
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          if (days > 1) {
            setDays(d => d - 1);
            return { hours: 24, minutes: 0, seconds: 0 };
          }
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [days]);

  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span className="text-emerald-400">{days} days - limited time deal</span>
      <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-medium">
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  );
}