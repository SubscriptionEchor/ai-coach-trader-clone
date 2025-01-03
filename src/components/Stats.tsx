import React from 'react';
import { Container } from './ui/Container';
import { gradients } from '../lib/constants/gradients';

const stats = [
  { label: 'Active Users', value: '120,000+' },
  { label: 'Daily Signals', value: '5,000+' },
  { label: 'Success Rate', value: '94%' },
  { label: 'Countries', value: '150+' }
];

export function Stats() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${gradients.glow} opacity-30`} />
      </div>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`font-bold text-4xl ${gradients.text} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}