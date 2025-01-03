import React from 'react';
import { motion } from 'framer-motion';
import { Point } from './types';

interface GlobePointsProps {
  points: Point[];
  isHovered: boolean;
}

export function GlobePoints({ points, isHovered }: GlobePointsProps) {
  return (
    <>
      {points.map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={isHovered ? 3 : 2}
          fill="url(#point-gradient)"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}
    </>
  );
}