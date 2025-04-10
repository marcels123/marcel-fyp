import { config } from './config';
import { AIServiceError } from './errors';

/**
 * Generate a response from OpenAI
 * 
 * @param prompt - The user's prompt to send to OpenAI
 * @returns The generated text response
 * @throws AIServiceError if the request fails
 */
export async function getOpenAIResponse(prompt: string): Promise<string> {
  try {
    // Ensure the prompt is a string and not empty
    const safePrompt = String(prompt).trim();
    
    if (!safePrompt) {
      throw new Error('Prompt cannot be empty');
    }
    
    if (!config.openai.apiKey) {
      throw new Error('OpenAI API key is not configured');
    }
    
    // This is a placeholder - you would implement the actual OpenAI API call here
    // when you add the OpenAI SDK to your project
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.openai.apiKey}`
      },
      body: JSON.stringify({
        model: config.openai.modelName,
        messages: [{ role: 'user', content: safePrompt }],
        max_tokens: 1000
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to generate response');
    }
    
    const data = await response.json();
    return data.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new AIServiceError(
      error instanceof Error ? error.message : 'Failed to generate response',
      'OpenAI',
      error
    );
  }
} 