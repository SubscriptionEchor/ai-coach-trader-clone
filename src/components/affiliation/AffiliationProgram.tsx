import React from 'react';
import { Users, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface AffiliationProgramProps {
  onJoinClick: () => void;
}

export function AffiliationProgram({ onJoinClick }: AffiliationProgramProps) {
  const benefits = [
    {
      icon: DollarSign,
      title: 'High Commission Rates',
      description: 'Earn up to 30% commission on every successful referral'
    },
    {
      icon: Users,
      title: 'Multi-Level Rewards',
      description: 'Get rewards from sub-affiliates up to 5 levels deep'
    },
    {
      icon: TrendingUp,
      title: 'Performance Bonuses',
      description: 'Unlock additional rewards as you reach higher tiers'
    }
  ];

  return (
    <div className={cn(
      'p-8 rounded-xl',
      'bg-[#1d1d1d] border border-white/5',
      'relative overflow-hidden'
    )}>
      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Why Join Our Affiliation Program?
        </h2>
        
        <p className="text-gray-400 text-lg mb-8">
          Partner with us and earn rewards by referring traders to our platform. Our competitive commission rates and multi-level rewards system ensure maximum earnings potential.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'p-6 rounded-xl',
                'bg-white/5 border border-white/10',
                'hover:border-white/20',
                'transition-all duration-300'
              )}
            >
              <div className={cn(
                'p-3 rounded-xl mb-4',
                'bg-primary-light/10',
                'inline-block'
              )}>
                <benefit.icon className="w-6 h-6 text-primary-light" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onJoinClick}
          className={cn(
            'flex items-center justify-center gap-2',
            'px-8 py-3 rounded-lg',
            'bg-primary-light hover:bg-primary-light/90',
            'text-black font-medium',
            'transition-all duration-200',
            'group'
          )}
        >
          Become an Affiliate
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}