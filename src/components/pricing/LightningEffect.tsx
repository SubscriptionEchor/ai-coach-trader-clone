import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function LightningEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lightning Bolts */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            'absolute w-px',
            'bg-gradient-to-b from-transparent via-primary-light to-transparent',
            'opacity-0'
          )}
          style={{
            left: `${30 + i * 20}%`,
            height: '60%',
            top: '20%'
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0.8, 1.1, 0.9],
            translateY: ['-10%', '0%', '10%']
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 4 + i * 2,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Glow Effects */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(51,144,255,0.15),transparent_70%)]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Energy Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-light/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}