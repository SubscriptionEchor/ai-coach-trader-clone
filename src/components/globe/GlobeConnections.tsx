import React from 'react';
import { motion } from 'framer-motion';
import { Point } from './types';

interface GlobeConnectionsProps {
  points: Point[];
  isHovered: boolean;
}

export function GlobeConnections({ points, isHovered }: GlobeConnectionsProps) {
  return (
    <>
      {points.map((point, i) => 
        points.slice(i + 1).map((target, j) => {
          const distance = Math.sqrt(
            Math.pow(target.x - point.x, 2) + 
            Math.pow(target.y - point.y, 2)
          );
          
          if (distance < 120) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={point.x}
                y1={point.y}
                x2={target.x}
                y2={target.y}
                stroke="url(#line-gradient)"
                strokeWidth={isHovered ? 1.5 : 1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, isHovered ? 0.7 : 0.4, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            );
          }
          return null;
        })
      )}
    </>
  );
}