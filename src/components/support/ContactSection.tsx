import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormData({ subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn(
      'p-6 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      <h2 className="text-xl font-semibold text-white mb-6">
        Contact Support
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Subject
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            className={cn(
              'w-full px-4 py-3 rounded-lg',
              'bg-white/5 border border-white/10',
              'text-white placeholder-gray-500',
              'focus:outline-none focus:border-primary-light/30',
              'transition-colors'
            )}
            placeholder="What can we help you with?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className={cn(
              'w-full px-4 py-3 rounded-lg',
              'bg-white/5 border border-white/10',
              'text-white placeholder-gray-500',
              'focus:outline-none focus:border-primary-light/30',
              'transition-colors',
              'resize-none'
            )}
            placeholder="Describe your issue in detail..."
            rows={6}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'flex items-center justify-center gap-2',
            'w-full px-6 py-3 rounded-lg',
            'bg-primary-light hover:bg-primary-light/90',
            'text-black font-medium',
            'transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'group'
          )}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}