"use client";

import { useAuth } from "@/lib/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/authentication/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] rounded-lg p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome back, {user?.displayName || user?.email?.split('@')[0] || 'User'}!
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center mx-auto">
          Explore AI & Digital Media learning resources and tools. Choose from the navigation menu to get started.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 mb-4">Learn more about this project and its objectives.</p>
            <a href="/dashboard/about" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn</h3>
            <p className="text-gray-600 mb-4">Explore interactive learning content about AI and digital media.</p>
            <a href="/dashboard/learn" className="text-blue-600 hover:text-blue-800 font-medium">
              Start Learning →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Playground</h3>
            <p className="text-gray-600 mb-4">Experiment with AI models and test your knowledge.</p>
            <a href="/dashboard/ai-playground" className="text-blue-600 hover:text-blue-800 font-medium">
              Try AI Tools →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
  