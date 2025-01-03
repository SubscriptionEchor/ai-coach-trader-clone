import React from 'react';
import { motion } from 'framer-motion';

interface HeroVideoProps {
  videoSrc: string;
  className?: string;
}

export function HeroVideo({ videoSrc, className = '' }: HeroVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl ${className}`}
    >
      <video
        src={videoSrc}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </motion.div>
  );
}

export default HeroVideo;