export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export const AUTH_COOKIE_NAME = 'auth_token';
export const TELEGRAM_CHANNEL_LINK = import.meta.env.VITE_TELEGRAM_CHANNEL_LINK || 'https://t.me/+fZutvNa9RIU5OThl'
export const TELEGRAM_COMMUNITY_LINK = import.meta.env.VITE_TELEGRAM_COMMUNITY_LINK || 'https://t.me/+fZutvNa9RIU5OThl'
export const GOOGLE_AUTH_API_KEY = import.meta.env.VITE_GOOGLE_CLIENT_ID || '173184730059-u3mgjv0ddq953tv0e5odatkoljutvlna.apps.googleusercontent.com'
export const PRIVACY_POLICY = import.meta.env.VITE_PRIVACY_POLICY || 'https://www.termsfeed.com/live/428f6fe5-9946-4df5-b7a5-b842cbd90747'
export const TERMS_OF_CONDITION = import.meta.env.VITE_TERMS_OF_CONDITION || 'https://www.termsfeed.com/live/428f6fe5-9946-4df5-b7a5-b842cbd90747'

export const ROUTES = {
  HOME: '/',
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    FORGOT_PASSWORD: '/auth/forgot-password'
  },
  DASHBOARD: '/dashboard'
} as const;