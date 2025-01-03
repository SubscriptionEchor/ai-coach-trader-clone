import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, LayoutDashboard, History, Settings, Users, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { NavLink } from './NavLink';
import { LogoutConfirmation } from '../LogoutConfirmation';

export function Sidebar() {
  const navigate = useNavigate();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <aside className={cn(
        'w-64 h-screen',
        'bg-[#1d1d1d] border-r border-white/5',
        'flex flex-col',
        'transition-all duration-300'
      )}>
        {/* Logo Section */}
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className={cn(
              'p-2.5 rounded-xl',
              'bg-gradient-to-br from-primary-light/20 to-primary-light/5',
              'backdrop-blur-sm'
            )}>
              <Brain className="w-6 h-6 text-primary-light" />
            </div>
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Scalable
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-8">
          {/* Main Menu */}
          <div>
            <div className="px-3 mb-4 text-xs font-medium uppercase tracking-wider text-gray-400/80">
              Main Menu
            </div>
            <div className="space-y-1.5">
              <NavLink to="/dashboard" icon={LayoutDashboard}>
                Dashboard
              </NavLink>
              <NavLink to="/history" icon={History}>
                Signals History
              </NavLink>
            </div>
          </div>

          {/* Additional Options */}
          <div>
            <div className="px-3 mb-4 text-xs font-medium uppercase tracking-wider text-gray-400/80">
              Additional Options
            </div>
            <div className="space-y-1.5">
              <NavLink to="/settings" icon={Settings}>
                Settings
              </NavLink>
              <NavLink to="/referral" icon={Users}>
                Refer a Buddy
              </NavLink>
              <NavLink to="/support" icon={HelpCircle}>
                Support & FAQs
              </NavLink>
            </div>
          </div>
        </nav>

        {/* User Section */}
        <div className={cn(
          'p-4 mx-3 mb-3 rounded-xl',
          'bg-white/5 backdrop-blur-sm',
          'border border-white/5'
        )}>
          <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/5">
            <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center">
              <span className="text-primary-light font-medium">JD</span>
            </div>
            <div>
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-gray-400">john@example.com</div>
            </div>
          </div>
          
          <button
            onClick={() => setShowLogoutConfirmation(true)}
            className={cn(
              'w-full flex items-center justify-center gap-2',
              'px-3 py-2 rounded-lg',
              'text-gray-400 hover:text-white text-sm',
              'bg-white/5 hover:bg-white/10',
              'border border-white/5 hover:border-white/10',
              'transition-all duration-200'
            )}
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      <LogoutConfirmation
        isOpen={showLogoutConfirmation}
        onClose={() => setShowLogoutConfirmation(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}