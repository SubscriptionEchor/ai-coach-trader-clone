import React from 'react';
import { Container } from './ui/Container';
import { DeviceFrame } from './preview/DeviceFrame';
import { PreviewContent } from './preview/PreviewContent';

export function DevicePreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side content */}
          <PreviewContent />
          
          {/* Right side device frame */}
          <DeviceFrame 
            videoUrl="https://storage.googleapis.com/stackblitz-videos/trading-demo.mp4"
          />
        </div>
      </Container>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-purple-500/5 to-transparent opacity-30" />
    </section>
  );
}