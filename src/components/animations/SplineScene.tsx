import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import React from 'react';

export function SplineScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[600px]"
    >
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyHHKUdxn/scene.splinecode" />
    </motion.div>
  );
}