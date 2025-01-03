import React from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

interface RiveAnimationProps {
  src: string;
  stateMachine?: string;
  artboard?: string;
  className?: string;
}

export function RiveAnimation({ 
  src, 
  stateMachine, 
  artboard,
  className = '' 
}: RiveAnimationProps) {
  const { RiveComponent } = useRive({
    src,
    stateMachines: stateMachine ? [stateMachine] : undefined,
    artboard,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <div className={className}>
      <RiveComponent />
    </div>
  );
}