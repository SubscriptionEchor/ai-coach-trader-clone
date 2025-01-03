
// Mock authentication service
class AuthService {
  async signInWithGoogle(): Promise<{ isNewUser: boolean }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock successful Google sign in
    const mockUser = {
      id: 'google-user-123',
      email: 'user@gmail.com',
      name: 'Google User',
      photoURL: 'https://example.com/photo.jpg'
    };

    // Store mock user data
    localStorage.setItem('user', JSON.stringify(mockUser));

    // For demo purposes, randomly determine if this is a new user
    const isNewUser = Math.random() > 0.5;
    return { isNewUser };
  }

  async signOut(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.removeItem('user');
    return;
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }
}

export const authService = new AuthService();
