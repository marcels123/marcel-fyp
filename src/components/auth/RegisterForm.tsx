"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/auth-context";


export function RegisterForm() {
  const router = useRouter();
  const { register } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) {
      errors.push('Name is required');
    }
    
    if (!formData.email) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.password) {
      errors.push('Password is required');
    } else if (formData.password.length < 6) {
      errors.push('Password must be at least 6 characters');
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.push('Passwords do not match');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Client-side validation
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors[0]);
      setIsLoading(false);
      return;
    }

    try {
      await register(formData.email, formData.password, formData.name);
      router.push("/authentication/login?registered=true");
    } catch (error: any) {
      console.error("Registration error:", error);
      setError(error.message || "Failed to register");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[440px] space-y-8 bg-white rounded-2xl shadow-xl p-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">Register</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded">
            {error}
          </div>
        )}
        
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-400 text-sm transition-colors"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-400 text-sm transition-colors"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-400 text-sm transition-colors"
            value={formData.password}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-400 text-sm transition-colors"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !formData.name || !formData.email || !formData.password || !formData.confirmPassword}
          className={`w-full py-3 rounded-lg transition-colors mt-6 font-medium text-sm ${
            isLoading || !formData.name || !formData.email || !formData.password || !formData.confirmPassword
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-primary hover:bg-primary/90 text-white shadow-sm'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
              Creating Account...
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/authentication/login" className="text-primary hover:text-primary/80 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
} 