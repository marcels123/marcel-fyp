import { getGeminiResponse } from './gemini';
import { getOpenAIResponse } from './openai';
import { validateConfig } from './config';
import { formatErrorMessage } from './errors';

// Validate configuration on initialization
validateConfig();

/**
 * Available AI models
 */
export type AIModel = 'gemini' | 'openai';

/**
 * AI response generation options
 */
export interface AIRequestOptions {
  model: AIModel;
}

/**
 * Unified interface for generating AI responses
 * 
 * @param prompt - The user's prompt to send to the AI service
 * @param options - Configuration options including which model to use
 * @returns The generated text response
 */
export async function getAIResponse(
  prompt: string, 
  options: AIRequestOptions = { model: 'gemini' }
): Promise<string> {
  try {
    switch (options.model) {
      case 'gemini':
        return await getGeminiResponse(prompt);
      case 'openai':
        return await getOpenAIResponse(prompt);
      default:
        throw new Error(`Unknown AI model: ${options.model}`);
    }
  } catch (error) {
    // Format the error message consistently
    const errorMessage = formatErrorMessage(error);
    console.error('AI response error:', errorMessage);
    throw error;
  }
}

// Export individual services for direct access
export { getGeminiResponse } from './gemini';
export { getOpenAIResponse } from './openai';
export { AIServiceError } from './errors'; 