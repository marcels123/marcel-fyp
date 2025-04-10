"use client";

import { useState, useCallback } from 'react';

// Define AIModel type locally
type AIModel = 'gemini' | 'openai';

interface UseAIResult {
  prompt: string;
  setPrompt: (prompt: string) => void;
  response: string;
  isLoading: boolean;
  error: string | null;
  activeModel: AIModel;
  setActiveModel: (model: AIModel) => void;
  generateResponse: () => Promise<void>;
  clearResponse: () => void;
}

/**
 * Custom hook for AI interaction functionality
 * Manages state and API calls for AI responses
 */
export function useAI(initialModel: AIModel = 'gemini'): UseAIResult {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeModel, setActiveModel] = useState<AIModel>(initialModel);

  /**
   * Generate AI response based on the current prompt and model
   */
  const generateResponse = useCallback(async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt,
          model: activeModel 
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || `Failed to generate ${activeModel} response`);
      }

      setResponse(data.response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error generating AI response:', err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, activeModel]);

  /**
   * Clear current response
   */
  const clearResponse = useCallback(() => {
    setResponse('');
    setError(null);
  }, []);

  return {
    prompt,
    setPrompt,
    response,
    isLoading,
    error,
    activeModel,
    setActiveModel,
    generateResponse,
    clearResponse,
  };
} 