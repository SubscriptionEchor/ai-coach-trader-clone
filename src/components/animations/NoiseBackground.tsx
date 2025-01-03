import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrame: number;
    let imageData: ImageData;
    let noise: Uint8ClampedArray;
    let frame = 0;

    const createNoise = () => {
      const idata = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        buffer32[i] = ((Math.random() * 0.5 + 0.5) * 255) << 24;
      }

      return idata;
    };

    const animate = () => {
      if (!ctx) return;

      if (frame === 0) {
        imageData = createNoise();
        noise = imageData.data;
      }

      frame = (frame + 1) % 2;

      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = noise[i] + Math.random() * 10;
        data[i + 1] = noise[i + 1] + Math.random() * 10;
        data[i + 2] = noise[i + 2] + Math.random() * 10;
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'fixed inset-0 w-full h-full',
        'opacity-[0.015] mix-blend-overlay',
        'pointer-events-none'
      )}
    />
  );
}