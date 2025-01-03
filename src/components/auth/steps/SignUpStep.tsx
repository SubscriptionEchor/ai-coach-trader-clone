```tsx
// Previous imports remain the same...

export function SignUpStep({ onComplete, isLoading }: SignUpStepProps) {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'Test@123456',
    acceptTerms: false
  });
  
  const { validations, isValid } = usePasswordValidation(formData.password);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isValid) {
      newErrors.password = 'Please meet all password requirements';
    }

    if (!formData.acceptTerms) {
      newErrors.terms = 'You must accept the Terms of Service and Privacy Policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    onComplete();
  };

  return (
    <motion.form 
      className="space-y-6"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Previous form fields remain the same... */}

      {/* Terms Acceptance */}
      <div>
        <label className={cn(
          'flex items-start gap-3 cursor-pointer',
          'text-sm text-gray-400'
        )}>
          <input
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={(e) => setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }))}
            className="mt-1"
          />
          <span>
            I accept the{' '}
            <a href="/terms" className="text-primary-light hover:underline" target="_blank">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="/privacy" className="text-primary-light hover:underline" target="_blank">
              Privacy Policy
            </a>
          </span>
        </label>
        {errors.terms && (
          <p className="mt-1 text-sm text-red-500">{errors.terms}</p>
        )}
      </div>

      <SubmitButton 
        isLoading={isLoading} 
        disabled={!isValid || isLoading}
      >
        Create Account
      </SubmitButton>

      <SocialSignIn />

      <AuthLink
        text="Already have an account?"
        linkText="Sign in"
        to="/signin"
      />
    </motion.form>
  );
}
```