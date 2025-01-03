import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

interface DeviceFrameProps {
  videoUrl: string;
}

export function DeviceFrame({ videoUrl }: DeviceFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

        // Play/pause video based on visibility
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Handle autoplay failure (e.g., browser restrictions)
              console.log('Autoplay prevented by browser');
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Glow Effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary-light/20 via-transparent to-primary-light/20 blur-2xl opacity-50" />
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/20 via-primary-light/5 to-primary-light/20 blur-md" />

      {/* Device Frame */}
      <div className={cn(
        'relative rounded-2xl overflow-hidden',
        'border border-white/10',
        'bg-[#1d1d1d]',
        'shadow-2xl shadow-black/50'
      )}>
        {/* Browser Chrome */}
        <div className={cn(
          'flex items-center gap-1.5 px-4 py-3',
          'border-b border-white/10',
          'bg-black/20'
        )}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* URL Bar */}
          <div className={cn(
            'ml-4 flex-1 flex items-center gap-2',
            'px-4 py-1 rounded-lg',
            'bg-black/20',
            'text-xs text-gray-400'
          )}>
            <div className="w-4 h-4 rounded-full bg-primary-light/20" />
            <span>trading-signals.app</span>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-[16/10] bg-black/90">
          <video
            ref={videoRef}
            className={cn(
              'w-full h-full object-cover',
              '[&::-webkit-media-controls-panel]:bg-black/50',
              '[&::-webkit-media-controls-play-button]:text-white',
              '[&::-webkit-media-controls-current-time-display]:text-white',
              '[&::-webkit-media-controls-time-remaining-display]:text-white',
              '[&::-webkit-media-controls-timeline]:text-white'
            )}
            controls
            loop
            playsInline
            preload="metadata"
          // poster="/video-poster.jpg" // Add a poster image while video loads
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Overlay - Show when video is not visible */}
          {!isVisible && (
            <div className={cn(
              'absolute inset-0',
              'flex items-center justify-center',
              'bg-black/50 backdrop-blur-sm',
              'text-white'
            )}>
              <div className="text-center">
                <div className="text-sm">Scroll to play</div>
              </div>
            </div>
          )}

          {/* Glass Reflection */}
          <div className={cn(
            'absolute inset-0 pointer-events-none',
            'bg-gradient-to-br from-white/5 to-transparent',
            'opacity-50'
          )} />
        </div>
      </div>
    </div>
  );
}