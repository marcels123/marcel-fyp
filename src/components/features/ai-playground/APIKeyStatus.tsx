"use client";

import { useState, useEffect } from 'react';
import { InfoCircledIcon } from '@radix-ui/react-icons';

interface APIKeyStatusProps {
  className?: string;
}

export function APIKeyStatus({ className = "" }: APIKeyStatusProps) {
  const [status, setStatus] = useState<{
    gemini: boolean;
    openai: boolean;
  }>({ gemini: false, openai: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAPIKeys = async () => {
      try {
        const response = await fetch('/api/ai/status');
        if (response.ok) {
          const data = await response.json();
          setStatus(data);
        }
      } catch (error) {
        console.error('Failed to check API key status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAPIKeys();
  }, []);

  if (isLoading) {
    return null; // Don't show loading state to users
  }

  const allConfigured = status.gemini && status.openai;
  const noneConfigured = !status.gemini && !status.openai;

  // Hide the component entirely if all APIs are configured or if none are configured
  // This prevents showing technical details to users
  if (allConfigured || noneConfigured) {
    return null;
  }

  // Only show a minimal, user-friendly message if some APIs are available
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <InfoCircledIcon className="h-5 w-5 text-blue-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            Service Status
          </h3>
          <div className="mt-2 text-sm text-blue-700">
            <p>Some AI services are currently being configured. You can still use the available models.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 