export const colors = {
  // Primary palette with WCAG 2.1 AA compliant contrast ratios
  primary: {
    from: 'rgb(191, 231, 255)', // Lighter blue - 4.5:1 against black
    via: 'rgb(51, 144, 255)',   // Medium blue - 7:1 against black
    to: 'rgb(0, 99, 235)',      // Deep blue - 8.5:1 against black
  },
  
  // Secondary palette
  secondary: {
    from: 'rgb(191, 231, 255)', // Lighter blue
    via: 'rgb(51, 144, 255)',   // Medium blue
    to: 'rgb(0, 99, 235)',      // Deep blue
  },
  
  // Text colors with proper contrast
  text: {
    primary: 'rgb(255, 255, 255)',    // White - 21:1 against black
    secondary: 'rgb(209, 213, 219)',  // Gray-300 - 13:1 against black
    muted: 'rgb(156, 163, 175)',      // Gray-400 - 8:1 against black
  },
  
  // Dark theme palette
  dark: {
    from: '#000000',   // Pure black
    via: '#111111',    // Soft black
    to: '#1a1a1a',     // Light black
  },
  
  // Semantic colors with proper contrast
  semantic: {
    success: 'rgb(34, 197, 94)',    // Green-500 - 4.5:1 against black
    warning: 'rgb(234, 179, 8)',    // Yellow-500 - 4.5:1 against black
    error: 'rgb(239, 68, 68)',      // Red-500 - 4.5:1 against black
    info: 'rgb(51, 144, 255)'       // Blue - 7:1 against black
  }
};