import React from 'react';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';
import { TelegramSupport } from './TelegramSupport';
import { cn } from '../../lib/utils';

export function SupportContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white mb-2">
          Support & FAQs
        </h1>
        <p className="text-gray-400">
          Get help and find answers to common questions
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content - FAQs and Contact Form */}
        <div className="lg:col-span-2 space-y-8">
          <FAQSection />
          <ContactSection />
        </div>

        {/* Sidebar - Quick Support */}
        <div className="space-y-6">
          <TelegramSupport />
        </div>
      </div>
    </div>
  );
}