export const theme = {
  colors: {
    primary: {
      from: '#3b82f6', // Blue
      via: '#6366f1', // Indigo
      to: '#8b5cf6',  // Purple
    },
    accent: {
      from: '#06b6d4', // Cyan
      via: '#3b82f6', // Blue
      to: '#6366f1',  // Indigo
    },
    dark: {
      900: '#18181b',
      800: '#27272a',
      700: '#3f3f46',
    }
  },
  gradients: {
    primary: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500',
    accent: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500',
    glow: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-indigo-500/10 to-transparent',
    mesh: 'bg-[radial-gradient(ellipse_at_40%_20%,_var(--tw-gradient-stops))] from-blue-500/20 via-indigo-500/10 to-transparent',
    dark: 'bg-gradient-to-b from-zinc-900 to-zinc-800',
  }
};