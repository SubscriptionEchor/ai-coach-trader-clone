import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PasswordInput } from './password-input';
import { toast } from 'react-hot-toast';
import { ROUTES } from '@/lib/config';
import { useUser } from '@/lib/context/user';
import { authApi } from '@/services/api';

export function ResetPasswordPage() {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useUser()

  const validatePasswords = () => {
    const newErrors = {

      newPassword: '',
      confirmPassword: ''
    };
    if (passwords.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !newErrors.otp && !newErrors.newPassword && !newErrors.confirmPassword;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePasswords()) {
      return;
    }

    setIsLoading(true);
    try {
      localStorage.setItem('auth_token', userDetails.access_token)
      // Simulate API call
      let result = await authApi.update({
        password: passwords?.newPassword
      })
      if (!result?.status) {
        toast(result?.message)
        return
      }
      navigate('/signin', { replace: true });
    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <img
          src="/assets/images/nav-logo.png"
          alt="Pistol Signals"
          className="h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <button
          onClick={() => navigate(ROUTES.AUTH.VERIFY_OTP)}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold mb-3">Set new password</h1>
              <p className="text-gray-400">
                Your new password must be different from previously used passwords
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <PasswordInput
                value={passwords.newPassword}
                onChange={(value) => setPasswords(prev => ({ ...prev, newPassword: value }))}
                placeholder="Enter new password"
                error={errors.newPassword}
              />

              <PasswordInput
                value={passwords.confirmPassword}
                onChange={(value) => setPasswords(prev => ({ ...prev, confirmPassword: value }))}
                placeholder="Confirm new password"
                error={errors.confirmPassword}
              />

              <Button
                type="submit"
                variant="gradient"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div> : 'Reset Password'}
              </Button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}