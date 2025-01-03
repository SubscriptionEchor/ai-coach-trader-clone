import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { RiveAnimation } from '../animations/RiveAnimation';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  showBackButton?: boolean;
  animationSrc?: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  showBackButton = true,
  animationSrc = "https://cdn.rive.app/animations/login.riv"
}: AuthLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Column - Form */}
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
          {/* Back Button - Now positioned with more space */}
          {showBackButton && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => navigate('/')}
              className={cn(
                'absolute top-8 left-8',
                'flex items-center gap-2',
                'px-4 py-2 rounded-lg',
                'bg-white/5 hover:bg-white/10',
                'text-gray-400 hover:text-white',
                'border border-white/10',
                'transition-all duration-200'
              )}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>
          )}

          {/* Form Container - Added top padding to prevent overlap */}
          <div className="max-w-md w-full mx-auto mt-16">
            {/* Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p className="text-gray-400">{subtitle}</p>
            </motion.div>

            {children}
          </div>
        </div>

        {/* Right Column - Animation */}
        <div className="hidden lg:block bg-[#1d1d1d]">
          <div className="h-full flex items-center justify-center p-12">
            <div className="w-full max-w-lg aspect-square">
              <RiveAnimation
                src={animationSrc}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}