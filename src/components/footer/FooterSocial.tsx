import React from 'react';
import { cn } from '../../lib/utils';
import Twitter from '../../assets/svg/twitter.svg';
import Telegram from '../../assets/svg/telegram.svg';
import Discord from '../../assets/svg/discord.svg';

interface FooterSocialProps {
  className?: string;
}

export function FooterSocial({ className }: FooterSocialProps) {
  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com/your-handle',
      label: 'Follow us on Twitter',
    },
    {
      icon: Telegram,
      href: 'https://t.me/your-channel',
      label: 'Join our Telegram channel',
    },
    {
      icon: Discord,
      href: 'https://discord.com/your-server',
      label: 'Join our Discord',
    },
  ];

  return (
    <div className={cn('flex gap-4', className)}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={cn(
            'p-2.5 rounded-lg',
            'bg-white/5 hover:bg-white/10',
            'border border-white/10 hover:border-white/20',
            'text-gray-400 hover:text-white',
            'transition-all duration-200',
            'group'
          )}
        >
          <img
            src={link.icon}
            alt={link.label}
            className={cn(
              'w-5 h-5',
              'transition-transform duration-200',
              'group-hover:scale-110'
            )}
          />
        </a>
      ))}
    </div>
  );
}
