import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ShareModal } from './ShareModal';

interface ShareButtonProps {
  referralCode: string;
  className?: string;
}

export function ShareButton({ referralCode, className }: ShareButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={cn(
          'flex items-center justify-center gap-2',
          'px-6 py-3 rounded-lg',
          'bg-primary-light/10 hover:bg-primary-light/20',
          'border border-primary-light/20',
          'text-primary-light font-medium',
          'transition-all duration-200',
          'group',
          className
        )}
      >
        <Share2 className="w-5 h-5" />
        Share Link
      </button>

      <ShareModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        referralCode={referralCode}
      />
    </>
  );
}