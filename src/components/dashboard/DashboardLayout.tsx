import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './sidebar/Sidebar';
import { MobileHeader } from './header/MobileHeader';
import { MobileMenu } from './header/MobileMenu';
import { DashboardBackground } from './DashboardBackground';
import { cn } from '../../lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#111] relative">
      {/* Background Pattern */}
      <DashboardBackground />

      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:block w-64 flex-shrink-0 relative">
        <Sidebar />
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile Header - Shown only on mobile */}
        <MobileHeader 
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />

        {/* Main Content Area */}
        <main className={cn(
          'flex-1 overflow-auto',
          'p-4 md:p-6 lg:p-8',
          'relative'
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}