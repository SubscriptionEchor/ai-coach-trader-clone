import { useState, useCallback } from 'react';
import { useTelegramStore } from '../store';

export function useTelegramConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { connect, user, isConnecting, error } = useTelegramStore();

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleConnect = useCallback(async (username: string) => {
    try {
      await connect(username);
      closeModal();
      return true;
    } catch (error) {
      return false;
    }
  }, [connect, closeModal]);

  return {
    isModalOpen,
    openModal,
    closeModal,
    handleConnect,
    isConnecting,
    error,
    user
  };
}