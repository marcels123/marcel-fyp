"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/context/auth-context';
import { getUserAIInteractions, AIInteraction } from '@/lib/firebase/userService';

interface InteractionHistoryProps {
  className?: string;
}

export function InteractionHistory({ className = "" }: InteractionHistoryProps) {
  const { user } = useAuth();
  const [interactions, setInteractions] = useState<AIInteraction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!user) return;

    const loadInteractions = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const userInteractions = await getUserAIInteractions(user.uid, 10);
        setInteractions(userInteractions);
      } catch (err) {
        setError('Failed to load interaction history');
        console.error('Error loading interactions:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadInteractions();
  }, [user, refreshKey]);

  if (!user) return null;

  if (isLoading) {
    return (
      <div className={`text-center p-4 ${className}`}>
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-red-600 text-sm p-4 ${className}`}>
        {error}
      </div>
    );
  }

  if (interactions.length === 0) {
    return (
      <div className={`text-gray-500 text-sm p-4 text-center ${className}`}>
        No interactions yet. Start using the AI playground to see your history here.
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Recent Interactions</h3>
        <button
          onClick={() => setRefreshKey(prev => prev + 1)}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Refresh
        </button>
      </div>
      <div className="space-y-2">
        {interactions.map((interaction) => (
          <div key={interaction.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                {interaction.model}
              </span>
              <span className="text-xs text-gray-500">
                {interaction.timestamp.toDate().toLocaleDateString()}
              </span>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-medium text-gray-900">Prompt:</p>
                <p className="text-sm text-gray-700 truncate">{interaction.prompt}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Response:</p>
                <p className="text-sm text-gray-700 line-clamp-2">{interaction.response}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 