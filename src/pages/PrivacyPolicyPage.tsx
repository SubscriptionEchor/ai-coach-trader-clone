import React from 'react';
import { Container } from '../components/ui/Container';
import { cn } from '../lib/utils';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (email, password, username)</li>
              <li>Profile information (name, trading preferences)</li>
              <li>Transaction data and trading history</li>
              <li>Communication preferences and feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you trading signals and alerts</li>
              <li>Improve our services and develop new features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@example.com</p>
          </section>
        </div>
      </Container>
    </div>
  );
}