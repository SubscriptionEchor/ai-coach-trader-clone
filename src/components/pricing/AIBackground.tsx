import React from 'react';
import { NetworkAnimation } from '../animations/NetworkAnimation';

export function AIBackground() {
  return (
    <div className="absolute inset-0 opacity-30">
      <NetworkAnimation />
    </div>
  );
}