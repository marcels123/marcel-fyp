"use client";

import React from 'react';

interface ResponseDisplayProps {
  response: string;
  title?: string;
  isError?: boolean;
}

// Component to display AI response text

export function ResponseDisplay({
  response,
  title = "Response:",
  isError = false
}: ResponseDisplayProps) {
  if (!response) return null;
  
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className={`p-4 rounded-md ${isError ? 'bg-red-50 text-red-800' : 'bg-gray-50'}`}>
        <p className="whitespace-pre-wrap">{response}</p>
      </div>
    </div>
  );
} 