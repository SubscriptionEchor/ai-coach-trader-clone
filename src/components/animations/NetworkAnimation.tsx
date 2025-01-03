import React from 'react';
import { NetworkGradients } from './network/gradients';
import { NetworkNodes } from './network/NetworkNodes';
import { NetworkConnections } from './network/NetworkConnections';
import { FloatingParticles } from './network/FloatingParticles';
import { GridPattern } from './network/GridPattern';
import { AmbientGlow } from './network/AmbientGlow';
import { Node } from './network/types';

export function NetworkAnimation() {
  const nodes: Node[] = Array.from({ length: 15 }, (_, i) => ({
    x: 25 + (Math.random() * 50) + (i % 3) * 150,
    y: 50 + (Math.random() * 30) + Math.floor(i / 3) * 100,
    connections: Array.from({ length: 2 }, () => Math.floor(Math.random() * 15))
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <NetworkGradients />
        <NetworkConnections nodes={nodes} />
        <NetworkNodes nodes={nodes} />
      </svg>
      <GridPattern />
      <AmbientGlow />
      <FloatingParticles />
    </div>
  );
}