import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

interface LogoutConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutConfirmation({ isOpen, onClose, onConfirm }: LogoutConfirmationProps) {
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

          {/* Modal Container - Added flex container for centering */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                'w-full max-w-md p-6 mx-4',
                'bg-[#1d1d1d] rounded-xl',
                'border border-white/10',
                'relative'
              )}
            >
              {/* Icon */}
              <div className={cn(
                'mx-auto w-12 h-12 rounded-full',
                'bg-red-500/10 flex items-center justify-center',
                'mb-4'
              )}>
                <LogOut className="w-6 h-6 text-red-500" />
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Confirm Logout
                </h3>
                <p className="text-gray-400">
                  Are you sure you want to log out? You'll need to sign in again to access your account.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className={cn(
                    'flex-1 px-4 py-2.5 rounded-lg',
                    'bg-white/5 hover:bg-white/10',
                    'border border-white/10',
                    'text-gray-300 hover:text-white',
                    'transition-colors duration-200'
                  )}
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className={cn(
                    'flex-1 px-4 py-2.5 rounded-lg',
                    'bg-red-500 hover:bg-red-600',
                    'text-white font-medium',
                    'transition-colors duration-200'
                  )}
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}