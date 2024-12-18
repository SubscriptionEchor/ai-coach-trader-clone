import { ResponsiveNavbar } from '@/components/ResponsiveNavbar/responsive-navbar';
import { MobileNav } from './layout/mobile-nav';
import { Sidebar } from './sidebar';
import ConfirmationPopup from '../popup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isPopupOpen, setPopupOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate()
  const handleOpenPopup = () => {
    console.log('yaya')
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleConfirmLogout = () => {
    localStorage.clear();
    navigate('/signin', { replace: true })// Clear local storage
    // Navigate to sign-in page (implementation here depends on your routing setup)
    // For example: navigate('/signin', { replace: true });
  };
  return (
    <div className="">
      <ResponsiveNavbar handleOpenPopup={handleOpenPopup} />
      <Sidebar handleOpenPopup={handleOpenPopup} />
      <div className="pt-12 lg:pt-0 flex-1 xl:ml-64">{children}</div>
      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}
