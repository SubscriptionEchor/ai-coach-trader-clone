
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { TelegramConnectPage } from '../components/telegram/TelegramConnectPage';

export function TelegramPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-2">
            Connect Telegram
          </h1>
          <p className="text-gray-400">
            Link your Telegram account to receive real-time trading signals
          </p>
        </div>

        {/* Telegram Connect Component */}
        <TelegramConnectPage />
      </div>
    </DashboardLayout>
  );
}
