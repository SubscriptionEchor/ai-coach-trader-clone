import React from 'react';
import { TestimonialColumn } from './TestimonialColumn';
import { testimonials } from './data/testimonials';
import { cn } from '../../lib/utils';

export function TestimonialsWall() {
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3);

  return (
    <div className="relative">
      {/* Columns Grid */}
      <div className="grid grid-cols-2 gap-6">
        <TestimonialColumn 
          testimonials={column1} 
          speed={25}
          direction="up"
        />

        <TestimonialColumn 
          testimonials={column2} 
          className="pt-24"
          speed={30}
          direction="down"
        />
      </div>

      {/* Top and Bottom Gradient Overlays */}
      <div className={cn(
        "absolute inset-x-0 top-0 h-40",
        "bg-gradient-to-b from-black via-black/80 to-transparent",
        "pointer-events-none z-10"
      )} />
      
      <div className={cn(
        "absolute inset-x-0 bottom-0 h-40",
        "bg-gradient-to-t from-black via-black/80 to-transparent",
        "pointer-events-none z-10"
      )} />
    </div>
  );
}