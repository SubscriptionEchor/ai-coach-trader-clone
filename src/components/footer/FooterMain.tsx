import React from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterCommunity } from './FooterCommunity';
import { FooterSocial } from './FooterSocial';
import { FooterLogo } from './FooterLogo';

export function FooterMain() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-16 my-20">
      {/* Company Info - 4 columns */}
      <div className="lg:col-span-4">
        <FooterLogo />
        <p className="mt-6 text-gray-400 leading-relaxed text-lg">
          Advanced AI-powered trading signals helping traders make data-driven
          decisions 24/7.
        </p>
        <FooterSocial className="mt-8" />
      </div>

      {/* Links Section - 4 columns */}
      <div className="lg:col-span-4">
        <FooterLinks />
      </div>

      {/* Community Section - 4 columns */}
      <div className="lg:col-span-4">
        <FooterCommunity />
      </div>
    </div>
  );
}
