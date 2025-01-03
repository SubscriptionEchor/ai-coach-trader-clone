import React from 'react';

export function GlobeGradients() {
  return (
    <defs>
      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgb(191,231,255)" stopOpacity="0.5" />
        <stop offset="50%" stopColor="rgb(51,144,255)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="rgb(0,99,235)" stopOpacity="0.5" />
      </linearGradient>
      <radialGradient id="point-gradient">
        <stop offset="0%" stopColor="rgb(51,144,255)" />
        <stop offset="100%" stopColor="rgb(0,99,235)" />
      </radialGradient>
    </defs>
  );
}