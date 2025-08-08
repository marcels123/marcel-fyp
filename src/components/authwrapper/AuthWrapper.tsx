"use client";

import Link from 'next/link';
import { useAuth } from "@/lib/context/auth-context";
import { ReactNode } from "react";

interface AuthWrapperProps {
  children: ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#635bff]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h2 className="text-2xl font-semibold mb-4">Authentication Required</h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          Please log in to access this feature. This helps us provide better service and track usage.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/authentication/login" 
            className="bg-brand-primary text-white px-6 py-2 rounded-md hover:bg-brand-primary/90 transition-colors"
          >
            Log In
          </Link>
          <Link 
            href="/authentication/register" 
            className="border border-brand-primary text-brand-primary px-6 py-2 rounded-md hover:bg-brand-primary/10 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 