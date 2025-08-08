import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from './config';
import { AIServiceError } from './errors';

// Initialise Gemini client
const genAI = new GoogleGenerativeAI(config.gemini.apiKey || '');

// Gemini model - using the latest stable model
const geminiModel = genAI.getGenerativeModel({
  model: config.gemini.modelName,
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 2048,
  },
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
      throw new Error('Please enter a valid prompt');
    }
    
    if (!config.gemini.apiKey) {
      // Log technical details for developers but throw user-friendly error
      console.error('Gemini API key is not configured. Please add GOOGLE_GEMINI_API_KEY to your environment variables.');
      throw new Error('This AI model is currently unavailable. Please try again later or contact support.');
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