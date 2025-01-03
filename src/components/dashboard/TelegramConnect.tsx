import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useTelegramConnect } from './telegram/hooks/useTelegramConnect';
import { TelegramConnectModal } from './telegram/TelegramConnectModal';
import { TelegramApprovalStatus } from './telegram/TelegramApprovalStatus';

export function TelegramConnect() {
  const { 
    isModalOpen, 
    openModal, 
    closeModal, 
    handleConnect,
    user 
  } = useTelegramConnect();

  // If user has connected their Telegram, show approval status
  if (user) {
    return <TelegramApprovalStatus 
      status={user.approvalStatus} 
      username={user.username} 
    />;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'mb-8 p-6 rounded-xl',
          'bg-gradient-to-r from-[#0088cc]/20 to-transparent',
          'border border-[#0088cc]/20',
          'hover:border-[#0088cc]/30',
          'transition-all duration-300',
          'relative overflow-hidden'
        )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(0,136,204,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,136,204,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,136,204,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              Connect Your Telegram
            </h2>
            <p className="text-gray-400">
              Get instant trading signals delivered directly to your Telegram account
            </p>
          </div>

          {/* Connect Button */}
          <button
            onClick={openModal}
            className={cn(
              'flex items-center justify-center gap-3',
              'px-6 py-3 rounded-lg',
              'bg-[#0088cc] hover:bg-[#0088cc]/90',
              'text-white font-medium',
              'transition-all duration-300',
              'hover:translate-x-1',
              'hover:shadow-lg hover:shadow-[#0088cc]/20',
              'group whitespace-nowrap'
            )}
          >
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            Connect Telegram
          </button>
        </div>
      </motion.div>

      {/* Telegram Connect Modal */}
      <TelegramConnectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConnect={handleConnect}
      />
    </>
  );
}