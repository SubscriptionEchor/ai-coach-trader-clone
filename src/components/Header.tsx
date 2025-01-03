import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Logo } from './navbar/Logo';
import { NavLinks } from './navbar/NavLinks';
import { GradientButton } from './ui/GradientButton';
import { cn } from '../lib/utils';

export function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Floating Navbar */}
      <div className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50',
        'w-[calc(100%-3rem)] max-w-7xl',
        'transition-all duration-300',
        isScrolled && 'top-3'
      )}>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            'h-14 px-2',
            'bg-[#1d1d1d]/90 backdrop-blur-md',
            'border border-white/10',
            'rounded-full',
            'flex items-center justify-between',
            'transition-all duration-300'
          )}
        >
          {/* Logo */}
          <Logo />

          {/* Center Links */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 pr-2">
            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/signin')}
              className={cn(
                'hidden md:flex items-center',
                'px-4 py-2 rounded-full',
                'text-gray-300 hover:text-white',
                'transition-colors duration-200'
              )}
            >
              Sign In
            </motion.button>

            {/* Get Started Button */}
            <GradientButton 
              variant="primary"
              size="sm"
              onClick={() => navigate('/signup')}
              className={cn(
                'rounded-full',
                'bg-white text-black hover:bg-white/90',
                'transition-all duration-300'
              )}
            >
              Get Started
            </GradientButton>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                'lg:hidden p-2 rounded-full',
                'text-gray-400 hover:text-white',
                'transition-colors'
              )}
            >
              <div className="space-y-1.5">
                <div className="w-4 h-0.5 bg-current" />
                <div className="w-3 h-0.5 bg-current ml-1" />
                <div className="w-4 h-0.5 bg-current" />
              </div>
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}