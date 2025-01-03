import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { DeviceFrame } from './preview/DeviceFrame';
import { cn } from '../lib/utils';

export function DevicePreview() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={cn(
          'absolute inset-0',
          'bg-[radial-gradient(circle_800px_at_100%_200px,rgba(51,144,255,0.12),transparent_70%)]'
        )} />
        <div className={cn(
          'absolute inset-0',
          'bg-[linear-gradient(to_right,rgba(51,144,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.03)_1px,transparent_1px)]',
          'bg-[size:64px_64px]',
          'opacity-20'
        )} />
      </div>

      <Container className="relative">
        {/* Centered Device Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <DeviceFrame videoUrl="https://echor-assets.s3.ap-south-2.amazonaws.com/heroVideo.mp4" />
        </motion.div>
      </Container>
    </section>
  );
}