import { create } from 'zustand';
import { TelegramConnectState, TelegramUser, ApprovalStatus } from './types';

interface TelegramConnectStore extends TelegramConnectState {
  connect: (username: string) => Promise<void>;
  disconnect: () => void;
  setError: (error: string | null) => void;
  updateApprovalStatus: (status: ApprovalStatus) => void;
}

export const useTelegramStore = create<TelegramConnectStore>((set) => ({
  isConnecting: false,
  error: null,
  user: null,

  connect: async (username: string) => {
    set({ isConnecting: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const user: TelegramUser = {
        username,
        connected: true,
        connectedAt: new Date(),
        approvalStatus: 'pending'
      };
      
      localStorage.setItem('telegramUser', JSON.stringify(user));
      set({ user, isConnecting: false });
    } catch (error) {
      set({ 
        error: 'Failed to connect Telegram account', 
        isConnecting: false 
      });
    }
  },

  disconnect: () => {
    localStorage.removeItem('telegramUser');
    set({ user: null, error: null });
  },

  setError: (error) => set({ error }),

  updateApprovalStatus: (status) => set(state => ({
    user: state.user ? { ...state.user, approvalStatus: status } : null
  }))
}));