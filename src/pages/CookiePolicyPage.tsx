import React from 'react';
import { Container } from '../components/ui/Container';
import { cn } from '../lib/utils';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Essential Cookies</h3>
                <p>Required for basic website functionality and security.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Performance Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Functionality Cookies</h3>
                <p>Remember your preferences and settings.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Managing Cookies</h2>
            <p className="mb-4">You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your website experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
            <p>We may use third-party services that also set cookies on your device for analytics and functionality purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Please check back regularly for any updates.</p>
          </section>
        </div>
      </Container>
    </div>
  );
}