"use client";

import { useState, useCallback } from 'react';
import { useAuth } from '@/lib/context/auth-context';
import { storeAIInteraction } from '@/lib/firebase/userService';

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

export function useAI(initialModel: AIModel = 'gemini', onInteractionCreated?: () => void): UseAIResult {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Force Gemini as the only available model for now, if openai is available, code is here
  // const [activeModel, setActiveModel] = useState<AIModel>(initialModel);

  const [activeModel, setActiveModel] = useState<AIModel>('gemini');

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
        // Use the user-friendly error message from the API
        throw new Error(data.error || `Failed to generate ${activeModel} response`);
      }

      setResponse(data.response);
      
      // Store interaction in Firestore if user is authenticated
      if (user) {
        try {
          console.log('Storing AI interaction for user:', user.uid);
          await storeAIInteraction({
            userId: user.uid,
            prompt,
            response: data.response,
            model: activeModel
          });
          console.log('AI interaction stored successfully');
          
          // Notify parent component that a new interaction was created
          if (onInteractionCreated) {
            onInteractionCreated();
          }
        } catch (error) {
          console.error('Failed to store AI interaction:', error);
          // Don't throw error to user, just log it
        }
      } else {
        console.log('No user authenticated, skipping interaction storage');
      }
    } catch (err) {
      // Provide user-friendly error message
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      console.error('Error generating AI response:', err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, activeModel, user]);

  const clearResponse = useCallback(() => {
    setResponse('');
    setError(null);
  }, []);

  // Prevent switching to OpenAI, if openai is available, remove
  const handleModelChange = (model: AIModel) => {
    if (model === 'openai') {
      console.log('OpenAI is not available in the free version');
      return;
    }
    setActiveModel(model);
  };

  return {
    prompt,
    setPrompt,
    response,
    isLoading,
    error,
    activeModel,
    // Prevent switching to OpenAI. if openai is available, remove handleModelChange
    setActiveModel: handleModelChange,
    generateResponse,
    clearResponse,
  };
} 