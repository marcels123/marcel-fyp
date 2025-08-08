"use client"

import { useState } from 'react';
import { AIPlayground } from '@/components/features/ai-playground/AIPlayground';
import { AuthPrompt } from '@/components/features/ai-playground/AuthPrompt';
import { APIKeyStatus } from '@/components/features/ai-playground/APIKeyStatus';
import { InteractionHistory } from '@/components/features/ai-playground/InteractionHistory';
import { QuotaStatus } from '@/components/features/ai-playground/QuotaStatus';

export default function AIPlaygroundPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleInteractionCreated = () => {
    setRefreshKey(prev => prev + 1);
  };
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            AI Prompt Tool
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Explore the capabilities of different AI models by asking questions and comparing responses.
          </p>
        </div>

        <div className="bg-white text-black rounded-lg shadow-lg p-6 mb-8">
          <QuotaStatus className="mb-4" />
          <AuthPrompt />
          <AIPlayground title="Try AI Models" onInteractionCreated={handleInteractionCreated} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <InteractionHistory key={refreshKey} />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">Quick Tips</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start space-x-2">
                <span className="text-primary font-medium">•</span>
                <span>Try asking questions about different topics to see how each AI model responds</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary font-medium">•</span>
                <span>Compare responses between Gemini and OpenAI to understand their strengths</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary font-medium">•</span>
                <span>Your interaction history is automatically saved and displayed here</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary font-medium">•</span>
                <span>Both models support creative writing, coding help, and general knowledge</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">About Our AI Services</h2>
          <div className="prose prose-lg max-w-none text-black">
            <p>
              This tool allows you to interact with different AI language models and compare their outputs.
              Each model has its own strengths and characteristics:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-md p-4">
                <h3 className="text-xl font-medium text-black">Gemini</h3>
                <p className="text-black">Google's multimodal AI model capable of understanding and generating text, images, and more. Known for its factual accuracy and reasoning abilities.</p>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="text-xl font-medium text-black">OpenAI</h3>
                <p className="text-black">Powerful language model known for its creative writing capabilities, coding assistance, and general knowledge across a wide range of topics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 