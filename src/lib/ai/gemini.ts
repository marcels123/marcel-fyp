import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from './config';
import { AIServiceError } from './errors';

// Initialise Gemini client
const genAI = new GoogleGenerativeAI(config.gemini.apiKey || '');

// Gemini model
const geminiModel = genAI.getGenerativeModel({
  model: config.gemini.modelName,
});

/**
 * Generate a response from Gemini AI
 * 
 * @param prompt - The user's prompt to send to Gemini
 * @returns The generated text response
 * @throws AIServiceError if the request fails
 */
export async function getGeminiResponse(prompt: string): Promise<string> {
  try {
    // Ensures prompt is a string and not empty
    const safePrompt = String(prompt).trim();
    
    if (!safePrompt) {
      throw new Error('Prompt cannot be empty');
    }
    
    if (!config.gemini.apiKey) {
      throw new Error('Gemini API key is not configured');
    }
    
    // Generate content from Gemini
    const result = await geminiModel.generateContent(safePrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new AIServiceError(
      error instanceof Error ? error.message : 'Failed to generate response',
      'Gemini',
      error
    );
  }
} 