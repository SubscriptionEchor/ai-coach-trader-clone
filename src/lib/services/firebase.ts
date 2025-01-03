import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For demo purposes, using dummy credentials
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-app.firebaseapp.com", 
  projectId: "demo-project",
  appId: "demo-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;