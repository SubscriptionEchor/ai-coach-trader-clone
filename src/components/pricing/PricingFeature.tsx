import React from 'react';
import { Plus } from 'lucide-react';

interface PricingFeatureProps {
  text: string;
}

export function PricingFeature({ text }: PricingFeatureProps) {
  return (
    <div className="flex items-center space-x-3">
      <Plus className="h-4 w-4 text-gray-400" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}