import { useMemo } from 'react';
import { gradients } from '../constants/gradients';
import { animations } from '../styles/animations';

interface GradientOptions {
  type?: keyof typeof gradients;
  animated?: boolean;
  duration?: keyof typeof animations.gradient.duration;
}

export function useGradient({ 
  type = 'primary',
  animated = false,
  duration = 'normal'
}: GradientOptions = {}) {
  return useMemo(() => {
    const baseGradient = gradients[type];
    if (!animated) return baseGradient;
    
    return `${baseGradient} ${animations.gradient.base} ${animations.gradient.duration[duration]}`;
  }, [type, animated, duration]);
}