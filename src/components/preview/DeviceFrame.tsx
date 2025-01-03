import React from 'react';
import { gradients } from '../../lib/constants/gradients';

interface DeviceFrameProps {
  videoUrl: string;
}

export function DeviceFrame({ videoUrl }: DeviceFrameProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/20 via-purple-500/10 to-transparent opacity-50" />
      <div className="relative">
        <div className="gradient-border">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
            {/* Mock toolbar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              {/* <div className="flex-1 bg-gray-800/50 h-6 rounded-md" /> */}
            </div>
            
            {/* Video container */}
            <div className="rounded-lg overflow-hidden bg-black/50">
              <video
                className="w-full rounded-lg shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}