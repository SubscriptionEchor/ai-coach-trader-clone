import React from 'react';

interface PricingBadgeProps {
  text: string;
}

export function PricingBadge({ text }: PricingBadgeProps) {
  return (
    <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800/50 backdrop-blur-sm text-sm text-gray-300">
      {text}
    </div>
  );
}