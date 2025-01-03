import React from 'react';
import { Container } from './ui/Container';
import { FooterTop } from './footer/FooterTop';
import { FooterMain } from './footer/FooterMain';
import { FooterBottom } from './footer/FooterBottom';
import { cn } from '../lib/utils';

export function Footer() {
  return (
    <footer
      className={cn(
        'bg-[#1d1d1d]/80 backdrop-blur-lg',
        'border-t border-white/5'
      )}
    >
      <Container>
        <div className="py-20">
          <FooterTop />
          <FooterMain />
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}
