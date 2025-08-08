/**
 * Centralized configuration for AI services
 * This provides type-safe access to environment variables and default settings
 */

export const config = {
  gemini: {
    apiKey: process.env.GOOGLE_GEMINI_API_KEY,
    modelName: process.env.GEMINI_MODEL_NAME || 'gemini-1.5-flash',
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    modelName: process.env.OPENAI_MODEL_NAME || 'gpt-4-turbo',
  }
};

/**
 * Validates required configuration for AI services
 * Logs warnings for missing configuration
 */
export function validateConfig() {
  if (!config.gemini.apiKey) {
    console.warn('Missing GOOGLE_GEMINI_API_KEY environment variable');
  }
  
  if (!config.openai.apiKey) {
    console.warn('Missing OPENAI_API_KEY environment variable');
  }
} 