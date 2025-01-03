import React from 'react';
import { Container } from '../components/ui/Container';
import { cn } from '../lib/utils';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Service Description</h2>
            <p className="mb-4">Our platform provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-powered trading signals</li>
              <li>Market analysis and insights</li>
              <li>Real-time notifications via Telegram</li>
              <li>Educational resources and support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate account information</li>
              <li>Maintain the security of your account</li>
              <li>Use the service responsibly</li>
              <li>Comply with all applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Risk Disclosure</h2>
            <p>Trading involves substantial risk of loss. Our signals are for informational purposes only and should not be considered as financial advice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p>We are not liable for any losses incurred from using our services or following our trading signals.</p>
          </section>
        </div>
      </Container>
    </div>
  );
}