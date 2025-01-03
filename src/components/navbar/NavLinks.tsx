import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from './NavConfig';
import { cn } from '../../lib/utils';

interface NavLinksProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export function NavLinks({ mobile, onItemClick }: NavLinksProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (onItemClick) {
        onItemClick();
      }
    }
  };

  return (
    <div
      className={cn(
        mobile ? 'flex flex-col space-y-2' : 'flex items-center space-x-1'
      )}
    >
      {navItems.map((item) => (
        <motion.button
          key={item.sectionId}
          onClick={() => scrollToSection(item.sectionId)}
          whileHover={{ y: -1 }}
          className={cn(
            'px-4 py-2 rounded-full',
            'text-sm text-gray-300 hover:text-white',
            'transition-colors duration-200',
            mobile && 'w-full text-left'
          )}
        >
          {item.label}
        </motion.button>
      ))}
    </div>
  );
}
