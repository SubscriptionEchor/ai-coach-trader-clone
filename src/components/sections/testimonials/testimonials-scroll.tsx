import { useRef, useEffect } from 'react';
import { TestimonialCard } from './testimonial-card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Lindsay Pettingill',
    role: 'Crypto Trader, Replit',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200',
    content:
      "Pistol Signals has completely transformed my trading journey. The data-driven insights and real-time alerts make it so easy to spot profitable opportunities. I highly recommend it!",
  },
  {
    name: 'Izzy Miller',
    role: 'Investor, Hex',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200',
    content:
      "The advanced scanners and market overviews provided by Pistol Signals are game-changers. I’ve seen massive improvements in my trading strategy thanks to their reliable signals!",
  },
  {
    name: 'Mark Tenenholtz',
    role: 'Trader, PredeloHQ',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
    content:
      "Real-time alerts from Pistol Signals are unmatched. Getting instant notifications for market movements has allowed me to act quickly and maximize my profits. A must-have for traders!",
  },
  {
    name: 'Nick Schrock',
    role: 'Crypto Enthusiast, Dagster Labs',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200',
    content:
      "Pistol Signals’ multi-channel delivery system ensures I never miss an important signal. Whether it’s through the platform or Telegram notifications, I’m always informed and ready to trade.",
  },
];

// Duplicate testimonials for continuous scrolling
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export function TestimonialsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let startTime: number;
    const duration = 60000; // 60 seconds for one complete scroll

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % duration;
      const percentage = (progress / duration) * 100;

      if (scrollContainer) {
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollContainer.scrollLeft = (maxScroll * percentage) / 100;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling Container */}
      <div

        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden relative py-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.name}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[400px]"
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
