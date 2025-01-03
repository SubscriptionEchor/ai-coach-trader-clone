import React from 'react';
import { motion } from 'framer-motion';

export function FloatingParticles() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-light/30"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: '100%'
          }}
          animate={{
            y: [null, '0%'],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );
}