import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { RiveAnimation } from '../components/animations/RiveAnimation';

export function TelegramConnectPage() {
  const navigate = useNavigate();

  const handleConnect = () => {
    window.open('https://t.me/your_bot', '_blank');
    // TODO: Implement Telegram connection verification
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Column - Content */}
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
          {/* Back Button */}
          <button
            onClick={() => navigate('/signup')}
            className={cn(
              'absolute top-8 left-8',
              'flex items-center gap-2',
              'text-gray-400 hover:text-white',
              'transition-colors duration-200'
            )}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light/10 mb-6">
                <Send className="w-8 h-8 text-primary-light" />
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Connect Your Telegram
              </h1>
              <p className="text-gray-400 text-lg">
                Link your Telegram account to receive real-time trading signals and updates
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Steps */}
              <div className="space-y-4">
                {[
                  'Open Telegram and search for our bot @YourTradingBot',
                  'Start a conversation with the bot',
                  'Send the verification code to complete the connection'
                ].map((step, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-4 p-4 rounded-lg',
                      'bg-white/5 border border-white/10'
                    )}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light/10 flex items-center justify-center">
                      <span className="text-primary-light font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-1.5">{step}</p>
                  </div>
                ))}
              </div>

              {/* Connect Button */}
              <button
                onClick={handleConnect}
                className={cn(
                  'w-full flex items-center justify-center gap-3',
                  'px-6 py-3 rounded-lg',
                  'bg-[#0088cc] hover:bg-[#0088cc]/90',
                  'text-white font-medium',
                  'transition-all duration-200',
                  'group'
                )}
              >
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                Open Telegram
              </button>

              {/* Skip Option */}
              <button
                onClick={() => navigate('/dashboard')}
                className={cn(
                  'w-full px-6 py-3 rounded-lg',
                  'bg-white/5 hover:bg-white/10',
                  'border border-white/10 hover:border-white/20',
                  'text-gray-400 hover:text-white',
                  'transition-all duration-200'
                )}
              >
                Skip for now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Animation */}
        <div className="hidden lg:flex items-center justify-center bg-[#1d1d1d] p-12">
          <div className="w-full max-w-lg aspect-square">
            <RiveAnimation
              src="https://cdn.rive.app/animations/vehicles.riv"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}