import React from 'react';
import { Brain } from 'lucide-react';
import { gradients } from '../../lib/constants/gradients';
import LogoWhite from '../../assets/svg/white-logo.svg';

export function FooterLogo() {
  return (
    <div className="flex items-center space-x-2">
      {/* <div className={`${gradients.primary} p-1.5 rounded-lg`}>
        <Brain className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-semibold text-white">Scalable</span> */}
      <img height={100} width={100} src={LogoWhite} alt="logo" />
    </div>
  );
}
