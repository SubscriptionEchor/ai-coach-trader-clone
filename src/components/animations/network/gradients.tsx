import React from 'react';
import { NetworkGradient } from './types';

const gradients: NetworkGradient[] = [
  {
    id: 'line-gradient',
    stops: [
      { offset: '0%', color: 'rgb(51,144,255)', opacity: 0.2 },
      { offset: '50%', color: 'rgb(51,144,255)', opacity: 0.5 },
      { offset: '100%', color: 'rgb(51,144,255)', opacity: 0.2 }
    ]
  },
  {
    id: 'node-gradient',
    stops: [
      { offset: '0%', color: 'rgb(51,144,255)', opacity: 0.6 },
      { offset: '100%', color: 'rgb(51,144,255)', opacity: 0.2 }
    ]
  }
];

export function NetworkGradients() {
  return (
    <defs>
      {gradients.map(gradient => (
        <linearGradient key={gradient.id} id={gradient.id} x1="0%" y1="0%" x2="100%" y2="0%">
          {gradient.stops.map((stop, index) => (
            <stop
              key={index}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={stop.opacity}
            />
          ))}
        </linearGradient>
      ))}
    </defs>
  );
}