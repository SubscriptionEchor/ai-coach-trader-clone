
import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from './types';
import { cn } from '../../lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "p-8 rounded-2xl",
        "bg-[#141414]",
        "border border-white/[0.08]",
        "hover:border-white/[0.12]",
        "transition-colors duration-700"
      )}
    >
      <p className={cn(
        "text-gray-400",
        "text-base leading-relaxed",
        "tracking-tight",
        "mb-6"
      )}>
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.author.avatar}
          alt={testimonial.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className={cn(
            "text-sm font-medium text-white",
            "tracking-tight"
          )}>
            {testimonial.author.name}
          </div>
          <div className={cn(
            "text-xs text-gray-500",
            "tracking-normal"
          )}>
            {testimonial.author.role}
          </div>
        </div>
      </div>
    </div>
  );
}
