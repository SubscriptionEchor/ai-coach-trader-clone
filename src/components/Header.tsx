import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { Logo } from './navbar/Logo';
import { NavLinks } from './navbar/NavLinks';
import { GradientButton } from './ui/GradientButton';
import { cn } from '../lib/utils';

export function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header>
      {/* Floating Navbar */}
      <div
        className={cn(
          'fixed top-6 left-1/2 -translate-x-1/2 z-50',
          'w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-7xl',
          'transition-all duration-300',
          isScrolled && 'top-3'
        )}
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            'relative h-14 px-2',
            'bg-[#1d1d1d]/90 backdrop-blur-md',
            'border border-white/10',
            'rounded-full',
            'flex items-center justify-between',
            'transition-all duration-300'
          )}
        >
          {/* Logo */}
          <Logo />

          {/* Center Links - Desktop */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 pr-2">
            {/* Sign In Button - Desktop */}
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

            {/* Get Started Button - Desktop Only */}
            <div className="hidden lg:block">
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
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-full',
                'text-gray-400 hover:text-white',
                'transition-colors'
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'absolute top-[calc(100%+0.5rem)] left-0 right-0',
                'bg-[#1d1d1d]/95 backdrop-blur-md',
                'border border-white/10 rounded-2xl',
                'overflow-hidden'
              )}
            >
              <div className="p-4 space-y-4">
                <NavLinks
                  mobile
                  onItemClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Mobile Menu Actions */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {/* Get Started Button - Mobile */}
                  <GradientButton
                    variant="primary"
                    fullWidth
                    onClick={() => {
                      navigate('/signup');
                      setIsMobileMenuOpen(false);
                    }}
                    className="rounded-lg"
                  >
                    Get Started
                  </GradientButton>

                  {/* Sign In Button - Mobile */}
                  <button
                    onClick={() => {
                      navigate('/signin');
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      'w-full px-4 py-2 rounded-lg',
                      'text-gray-300 hover:text-white',
                      'hover:bg-white/5',
                      'transition-colors duration-200',
                      'text-center'
                    )}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
