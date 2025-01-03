import React from 'react';
import { Container } from './ui/Container';
import { Brain, Cpu, Network, Bot } from 'lucide-react';
import { gradients } from '../lib/constants/gradients';

const integrations = [
  {
    icon: Brain,
    title: 'Neural Networks',
    description: 'Deep learning models analyze market patterns'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Advanced algorithms for precise predictions'
  },
  {
    icon: Network,
    title: 'Real-time Processing',
    description: 'Instant market data analysis'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Automated trading signals generation'
  }
];

export function Integrations() {
  return (
    <div className="py-24 relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Powered by Advanced{' '}
            <span className={`${gradients.text} bg-clip-text text-transparent`}>
              AI & ML
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform leverages cutting-edge artificial intelligence and machine learning
            technologies to deliver accurate trading signals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((item) => (
            <div
              key={item.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              <item.icon className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}