"use client";

import React from 'react';

// Define AIModel type locally for now
type AIModel = 'gemini' | 'openai';

interface ModelSelectorProps {
  activeModel: AIModel;
  onModelChange: (model: AIModel) => void;
  disabled?: boolean;
}

/**
 * Component to select AI model to use
 */
export function ModelSelector({
  activeModel,
  onModelChange,
  disabled = false
}: ModelSelectorProps) {
  return (
    <div className="flex space-x-2 mb-4">
      <button 
        onClick={() => onModelChange('gemini')}
        disabled={disabled}
        className={`px-4 py-2 rounded transition-colors ${
          activeModel === 'gemini' 
            ? 'bg-[#635bff] text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Gemini
      </button>
      {/* If openai is available, code for the button is here */}
      {/* <button 
        onClick={() => onModelChange('openai')}
        disabled={disabled}
        className={`px-4 py-2 rounded transition-colors ${
          activeModel === 'openai' 
            ? 'bg-[#635bff] text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        OpenAI
      </button> */}
      <div className="relative group">
        <button 
          onClick={() => onModelChange('openai')}
          disabled={true}
          className={`px-4 py-2 rounded transition-colors bg-gray-400 text-gray-600 cursor-not-allowed opacity-60`}
        >
          OpenAI
        </button>
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
          OpenAI is not available in the free version
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
} 