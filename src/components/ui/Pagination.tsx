import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Show max 5 page numbers
  const getVisiblePages = () => {
    if (totalPages <= 5) return pages;
    
    if (currentPage <= 3) return pages.slice(0, 5);
    if (currentPage >= totalPages - 2) return pages.slice(totalPages - 5);
    
    return pages.slice(currentPage - 3, currentPage + 2);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'p-2 rounded-lg',
          'text-gray-400 hover:text-white',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transition-colors'
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getVisiblePages().map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              'w-10 h-10 rounded-lg',
              'flex items-center justify-center',
              'text-sm font-medium',
              'transition-colors duration-200',
              page === currentPage ? [
                'bg-primary-light/10',
                'text-primary-light',
                'border border-primary-light/20'
              ] : [
                'bg-white/5 hover:bg-white/10',
                'text-gray-400 hover:text-white',
                'border border-white/10'
              ]
            )}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'p-2 rounded-lg',
          'text-gray-400 hover:text-white',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transition-colors'
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}