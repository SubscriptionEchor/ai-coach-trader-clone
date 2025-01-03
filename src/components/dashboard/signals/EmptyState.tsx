```tsx
import React from 'react';
import { SearchX } from 'lucide-react';
import { cn } from '../../../lib/utils';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <div className={cn(
          'p-3 rounded-full',
          'bg-white/5',
          'text-gray-400'
        )}>
          <SearchX className="w-6 h-6" />
        </div>
      </div>
      <p className="text-gray-400">No signals found matching your criteria.</p>
    </div>
  );
}
```