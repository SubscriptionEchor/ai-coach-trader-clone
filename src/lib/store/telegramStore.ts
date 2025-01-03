import { create } from 'zustand';

interface TelegramState {
  isConnected: boolean;
  username: string | null;
  isVerifying: boolean;
  error: string | null;
  connectionStep: 'initial' | 'verification' | 'success';
  connect: (username: string) => Promise<void>;
  disconnect: () => void;
  setError: (error: string | null) => void;
  setConnectionStep: (step: 'initial' | 'verification' | 'success') => void;
}

export const useTelegramStore = create<TelegramState>((set) => ({
  isConnected: false,
  username: null,
  isVerifying: false,
  error: null,
  connectionStep: 'initial',

  connect: async (username: string) => {
    set({ isVerifying: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      set({ 
        isConnected: true, 
        username,
        isVerifying: false,
        connectionStep: 'success'
      });
    } catch (error) {
      set({ 
        error: 'Failed to connect Telegram account',
        isVerifying: false 
      });
    }
  },

  disconnect: () => {
    set({ 
      isConnected: false, 
      username: null, 
      connectionStep: 'initial' 
    });
  },

  setError: (error) => set({ error }),
  setConnectionStep: (step) => set({ connectionStep: step })
}));