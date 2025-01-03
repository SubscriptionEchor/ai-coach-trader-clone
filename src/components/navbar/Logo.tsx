import React from 'react';
import { Brain } from 'lucide-react';
import { gradients } from '../../lib/constants/gradients';
import LogoWhite from '../../assets/svg/white-logo.svg';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      {/* <div className={`${gradients.primary} p-1.5 rounded-lg`}>
        <Brain className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-semibold text-white">Scalable</span> */}
      <img
        className="ps-2.5"
        height={90}
        width={90}
        src={LogoWhite}
        alt="logo"
      />
    </div>
  );
}
