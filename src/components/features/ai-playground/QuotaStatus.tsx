"use client";

import { useState, useEffect } from 'react';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface QuotaStatusProps {
  className?: string;
}

export function QuotaStatus({ className = "" }: QuotaStatusProps) {
  const [quotaInfo, setQuotaInfo] = useState<{
    gemini: boolean;
    openai: boolean;
    quotaExceeded?: boolean;
  }>({ gemini: false, openai: false });

  useEffect(() => {
    const checkQuota = async () => {
      try {
        const response = await fetch('/api/ai/status');
        if (response.ok) {
          const data = await response.json();
          setQuotaInfo(data);
        }
      } catch (error) {
        console.error('Failed to check quota status:', error);
      }
    };

    checkQuota();
  }, []);

  if (!quotaInfo.quotaExceeded) {
    return null;
  }

  return (
    <div className={`bg-yellow-50 border border-yellow-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            API Quota Exceeded
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p className="mb-2">
              You've reached the free tier limits for Gemini API. Here are your options:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Wait 24 hours for quota reset</li>
              <li>Upgrade to a paid plan at <a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer" className="underline">Google AI Studio</a></li>
              <li>Try using OpenAI instead (if configured)</li>
            </ul>
            <p className="mt-2 text-xs">
              Free tier limits: 15 requests/minute, 1,500 requests/day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 