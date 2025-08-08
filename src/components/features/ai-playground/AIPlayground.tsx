"use client"

import React from 'react';
import { useAI } from './hooks/useAI';
import { PromptInput } from './PromptInput';
import { ResponseDisplay } from './ResponseDisplay';
import { ModelSelector } from './ModelSelector';

interface AIPlaygroundProps {
  title?: string;
  initialModel?: 'gemini' | 'openai';
  onInteractionCreated?: () => void;
}

/**
 * Complete AI playground component combining all the UI pieces
 */
export function AIPlayground({
  title = "AI Playground",
  initialModel = 'gemini',
  onInteractionCreated
}: AIPlaygroundProps) {
  const {
    prompt,
    setPrompt,
    response,
    isLoading,
    error,
    activeModel,
    setActiveModel,
    generateResponse,
    clearResponse
  } = useAI(initialModel, onInteractionCreated);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button
          onClick={clearResponse}
          className={`text-sm transition-colors ${response ? 'text-gray-500 hover:text-gray-700' : 'text-gray-300 cursor-not-allowed'}`}
          disabled={!response}
        >
          Clear response
        </button>
      </div>
      
      <ModelSelector
        activeModel={activeModel}
        onModelChange={setActiveModel}
        disabled={isLoading}
      />
      
      <PromptInput
        value={prompt}
        onChange={setPrompt}
        onSubmit={generateResponse}
        isLoading={isLoading}
        placeholder={`Ask ${activeModel} anything...`}
        submitLabel={`Generate with ${activeModel}`}
      />
      
      {error ? (
        <ResponseDisplay
          response={error}
          title="Error:"
          isError={true}
        />
      ) : response ? (
        <ResponseDisplay
          response={response}
          title={`${activeModel.charAt(0).toUpperCase() + activeModel.slice(1)} Response:`}
        />
      ) : null}
    </div>
  );
} 