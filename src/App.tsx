import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { OTPVerificationPage } from './pages/OTPVerificationPage';
import { SetNewPasswordPage } from './pages/SetNewPasswordPage';
import { EmailVerificationPage } from './pages/EmailVerificationPage';
import { AccountCreatedPage } from './pages/AccountCreatedPage';
import { SubscriptionPage } from './pages/SubscriptionPage';
import { SubscriptionSuccessPage } from './pages/SubscriptionSuccessPage';
import { DashboardPage } from './pages/DashboardPage';
import { SignalHistoryPage } from './pages/SignalHistoryPage';
import { TelegramPage } from './pages/TelegramPage';
import { ReferralPage } from './pages/ReferralPage';
import { AffiliationPage } from './pages/AffiliationPage';
import { SupportPage } from './pages/SupportPage';
import { SettingsPage } from './pages/SettingsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/set-new-password" element={<SetNewPasswordPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/account-created" element={<AccountCreatedPage />} />
        <Route path="/subscribe" element={<SubscriptionPage />} />
        <Route path="/subscription-success" element={<SubscriptionSuccessPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/history" element={<SignalHistoryPage />} />
        <Route path="/telegram" element={<TelegramPage />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/affiliation" element={<AffiliationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Policy Pages */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;