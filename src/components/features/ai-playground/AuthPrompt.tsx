"use client";

import { useAuth } from '@/lib/context/auth-context';
import Link from 'next/link';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface AuthPromptProps {
  title?: string;
  message?: string;
}

export function AuthPrompt({ 
  title = "Authentication Required", 
  message = "Please sign in to use the AI playground features." 
}: AuthPromptProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
      <div className="mb-4">
        <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-yellow-400" />
      </div>
      <h3 className="text-lg font-medium text-yellow-800 mb-2">{title}</h3>
      <p className="text-yellow-700 mb-4">{message}</p>
      <div className="space-x-4">
        <Link 
          href="/authentication/login" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Sign In
        </Link>
        <Link 
          href="/authentication/register" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
} 