"use client";

import React from 'react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  placeholder?: string;
  submitLabel?: string;
  loadingLabel?: string;
}

/**
 * Reusable prompt input component with textarea and submit button
 */
export function PromptInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  placeholder = "Enter your prompt...",
  submitLabel = "Generate Response",
  loadingLabel = "Generating..."
}: PromptInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label 
          htmlFor="prompt" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter your prompt
        </label>
        <textarea
          id="prompt"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#635bff] focus:border-[#635bff]"
          rows={4}
          placeholder={placeholder}
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !value.trim()}
        className="w-full bg-[#635bff] text-white py-2 px-4 rounded-md hover:bg-[#635bff]/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? loadingLabel : submitLabel}
      </button>
    </form>
  );
} 