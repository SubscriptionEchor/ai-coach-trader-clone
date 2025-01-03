import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              'w-full max-w-md p-6',
              'bg-[#1d1d1d] rounded-xl',
              'border border-white/10',
              'z-50'
            )}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={cn(
                'absolute top-4 right-4',
                'p-2 rounded-lg',
                'hover:bg-white/5',
                'transition-colors'
              )}
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className={cn(
                  'w-16 h-16 rounded-full',
                  'bg-emerald-500/10 border border-emerald-500/20',
                  'flex items-center justify-center'
                )}>
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-white mb-2">
                Application Received!
              </h2>
              <p className="text-gray-400 mb-6">
                Thank you for your interest in our affiliation program. Our team will review your application and get back to you within 24-48 hours.
              </p>

              <button
                onClick={onClose}
                className={cn(
                  'px-6 py-3 rounded-lg',
                  'bg-white/5 hover:bg-white/10',
                  'text-gray-400 hover:text-white',
                  'transition-colors'
                )}
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}