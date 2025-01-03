import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  z: number;
}

interface GlobeProps {
  size?: number;
  pointCount?: number;
  className?: string;
}

export function Globe({ 
  size = 400, 
  pointCount = 50,
  className = '' 
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const angleX = useRef(0);
  const angleY = useRef(0);
  const isMouseDown = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const autoRotate = useRef(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Generate points on a sphere
    points.current = Array.from({ length: pointCount }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = size / 3;

      return {
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi)
      };
    });

    let animationFrame: number;
    let velocityX = 0;
    let velocityY = 0;
    const friction = 0.95;

    const render = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, size, size);
      
      // Update rotation with momentum
      if (autoRotate.current) {
        angleX.current += 0.002;
        angleY.current += 0.003;
      } else {
        angleX.current += velocityY * 0.01;
        angleY.current += velocityX * 0.01;
        velocityX *= friction;
        velocityY *= friction;

        if (Math.abs(velocityX) < 0.001 && Math.abs(velocityY) < 0.001) {
          autoRotate.current = true;
        }
      }

      // Transform and project points
      const projectedPoints = points.current.map(point => {
        // Rotate around Y axis
        const x1 = point.x * Math.cos(angleY.current) - point.z * Math.sin(angleY.current);
        const z1 = point.z * Math.cos(angleY.current) + point.x * Math.sin(angleY.current);

        // Rotate around X axis
        const y2 = point.y * Math.cos(angleX.current) - z1 * Math.sin(angleX.current);
        const z2 = z1 * Math.cos(angleX.current) + point.y * Math.sin(angleX.current);

        // Project to 2D with perspective
        const scale = 1000 / (1000 + z2);
        return {
          x: x1 * scale + size / 2,
          y: y2 * scale + size / 2,
          z: z2,
          scale
        };
      });

      // Draw connections with depth-based opacity
      ctx.lineWidth = 1;
      
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + 
            Math.pow(p1.y - p2.y, 2)
          );

          if (distance < 100) {
            const opacity = isHovered ? 0.3 : 0.15;
            const depthOpacity = ((p1.z + p2.z) / 2 + size/2) / size;
            ctx.strokeStyle = `rgba(51, 144, 255, ${opacity * depthOpacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw points with depth-based size and opacity
      projectedPoints.forEach(point => {
        const pointSize = isHovered ? 2.5 : 2;
        const opacity = isHovered ? 0.7 : 0.5;
        const depthOpacity = (point.z + size/2) / size;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointSize * point.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(51, 144, 255, ${opacity * depthOpacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    // Mouse interaction handlers
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown.current = true;
      autoRotate.current = false;
      const rect = canvas.getBoundingClientRect();
      lastMousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown.current) return;
      
      const rect = canvas.getBoundingClientRect();
      const currentPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      velocityX = (currentPos.x - lastMousePos.current.x) * 0.1;
      velocityY = (currentPos.y - lastMousePos.current.y) * 0.1;

      lastMousePos.current = currentPos;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      isMouseDown.current = false;
    };

    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseup', handleMouseUp);

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [size, pointCount, isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'none' }}
      />
    </motion.div>
  );
}