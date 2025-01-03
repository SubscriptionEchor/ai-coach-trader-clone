
import React, { useState } from 'react';
import { CreditCard, Calendar, AlertCircle, Wallet } from 'lucide-react';
import { cn } from '../../lib/utils';
import { CoinPaymentsModal } from '../subscription/CoinPaymentsModal';

export function SubscriptionSettings() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const subscriptionDetails = {
    plan: 'Pro Plan',
    price: '$199/month',
    nextRenewal: '2024-03-15',
    paymentAddress: 'TW6qtPk4fR4qDHVp7ZyJUWpN1i4qkqj2Xz',
    status: 'active'
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    // Handle successful payment
  };

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={cn(
          'p-2.5 rounded-lg',
          'bg-primary-light/10'
        )}>
          <CreditCard className="w-5 h-5 text-primary-light" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Subscription</h2>
          <p className="text-sm text-gray-400 mt-1">Manage your subscription plan</p>
        </div>
      </div>

      {/* Plan Details */}
      <div className="space-y-6">
        {/* Current Plan */}
        <div className={cn(
          'p-4 rounded-lg',
          'bg-white/5 border border-white/10'
        )}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-400">Current Plan</div>
              <div className="text-xl font-semibold text-white mt-1">{subscriptionDetails.plan}</div>
            </div>
            <div className={cn(
              'px-3 py-1 rounded-full text-sm',
              'bg-emerald-500/10 text-emerald-500'
            )}>
              {subscriptionDetails.status}
            </div>
          </div>
          <div className="text-sm text-gray-400">
            {subscriptionDetails.price}
          </div>
        </div>

        {/* Next Renewal */}
        <div className={cn(
          'p-4 rounded-lg',
          'bg-white/5 border border-white/10'
        )}>
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div className="text-sm text-gray-400">Next Renewal</div>
          </div>
          <div className="text-white font-medium">
            {new Date(subscriptionDetails.nextRenewal).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Payment Method */}
        <div className={cn(
          'p-4 rounded-lg',
          'bg-white/5 border border-white/10'
        )}>
          <div className="flex items-center gap-3 mb-2">
            <Wallet className="w-5 h-5 text-gray-400" />
            <div className="text-sm text-gray-400">Payment Method</div>
          </div>
          <div className="text-white font-medium">
            USDT (TRC20, ERC20, BSC)
          </div>
        </div>

        {/* Auto-Renewal Notice */}
        <div className={cn(
          'p-4 rounded-lg',
          'bg-blue-500/10 border border-blue-500/20',
          'flex items-start gap-3'
        )}>
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-500">
            Your subscription will automatically expire if payment is not received by the renewal date. Make sure to complete the payment before the expiration to maintain uninterrupted access.
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setShowPaymentModal(true)}
            className={cn(
              'flex-1 px-6 py-3 rounded-lg',
              'bg-primary-light hover:bg-primary-light/90',
              'text-black font-medium',
              'transition-colors',
              'flex items-center justify-center gap-2'
            )}
          >
            <Wallet className="w-5 h-5" />
            Renew Subscription
          </button>
          <button className={cn(
            'flex-1 px-6 py-3 rounded-lg',
            'bg-white/5 hover:bg-white/10',
            'text-gray-400 hover:text-white',
            'border border-white/10',
            'transition-colors'
          )}>
            Cancel Subscription
          </button>
        </div>
      </div>

      {/* CoinPayments Modal */}
      <CoinPaymentsModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={handlePaymentSuccess}
        plan={{
          name: subscriptionDetails.plan,
          price: '199',
          period: 'month'
        }}
      />
    </div>
  );
}
