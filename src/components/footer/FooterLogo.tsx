import React from 'react';
import { Brain } from 'lucide-react';
import { gradients } from '../../lib/constants/gradients';

export function FooterLogo() {
  return (
    <div className="flex items-center space-x-2">
      <div className={`${gradients.primary} p-1.5 rounded-lg`}>
        <Brain className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-semibold text-white">Scalable</span>
    </div>
  );
}