/**
 * Available AI model types
 */
export type AIModel = 'gemini' | 'openai';

/**
 * Options for AI request configuration
 */
export interface AIRequestOptions {
  model: AIModel;
}

/**
 * AI response structure
 */
export interface AIResponse {
  content: string;
  model: AIModel;
  timestamp: string;
}

/**
 * Error structure for AI service errors
 */
export interface AIServiceErrorInfo {
  message: string;
  service: string;
  details?: unknown;
} 