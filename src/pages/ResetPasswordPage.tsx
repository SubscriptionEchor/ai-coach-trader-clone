import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { ResetPasswordForm } from '../components/auth/reset-password/ResetPasswordForm';
import { ResetPasswordSuccess } from '../components/auth/forgot-password/ResetPasswordSuccess';
import { usePasswordValidation } from '../hooks/usePasswordValidation';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { validations, isValid } = usePasswordValidation(formData.password);

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsValidToken(false);
        return;
      }

      try {
        // Simulate token validation API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsValidToken(true);
      } catch (error) {
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isValid) {
      newErrors.password = 'Please meet all password requirements';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call to reset password
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      setErrors({ submit: 'Failed to reset password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isValidToken === null) {
    return (
      <AuthLayout
        title="Validating Reset Link"
        subtitle="Please wait while we validate your reset link"
      >
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-primary-light/30 border-t-primary-light rounded-full animate-spin" />
        </div>
      </AuthLayout>
    );
  }

  if (!isValidToken) {
    return (
      <AuthLayout
        title="Invalid Reset Link"
        subtitle="This password reset link is invalid or has expired"
      >
        <div className="text-center">
          <button
            onClick={() => navigate('/forgot-password')}
            className="text-primary-light hover:text-primary-light/80 transition-colors"
          >
            Request a new reset link
          </button>
        </div>
      </AuthLayout>
    );
  }

  if (isSuccess) {
    return <ResetPasswordSuccess />;
  }

  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Please create a strong password for your account"
    >
      <ResetPasswordForm
        formData={formData}
        errors={errors}
        validations={validations}
        isValid={isValid}
        isLoading={isLoading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}