import React from 'react';
import { Send } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TelegramButtonProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function TelegramButton({
  children,
  className,
  fullWidth = false,
  onClick
}: TelegramButtonProps) {
  return (
    <button 
      className={cn(
        "flex items-center justify-center",
        "px-8 py-3 rounded-full",
        "bg-gradient-to-r from-[#0088cc] via-[#0099e6] to-[#00aaff]",
        "hover:from-[#0077b3] hover:via-[#0088cc] hover:to-[#0099e6]",
        "text-white font-medium",
        "shadow-lg shadow-[#0088cc]/25",
        "border border-transparent",
        "transition-all duration-300",
        "group",
        fullWidth && "w-full",
        className
      )}
      onClick={onClick}
    >
      {children}
      <Send className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
}