import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from '../sidebar/Sidebar';
import { cn } from '../../../lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={cn(
              'lg:hidden fixed inset-y-0 left-0 w-64',
              'bg-[#1d1d1d] z-50'
            )}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={cn(
                'absolute top-5 right-4',
                'p-2 rounded-lg',
                'text-gray-400 hover:text-white',
                'hover:bg-white/5',
                'transition-colors'
              )}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sidebar Content */}
            <Sidebar />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
