import { NextResponse } from "next/server";

// Define AIModel type locally for now until path resolution is fixed
type AIModel = 'gemini' | 'openai';

// Temporary function until proper import is resolved
async function getAIResponse(prompt: string, options: { model: AIModel }): Promise<string> {
  const { model } = options;
  
  if (model === 'gemini') {
    // Import dynamically to avoid path resolution issues
    const { getGeminiResponse } = await import('@/lib/ai/gemini');
    return getGeminiResponse(prompt);
  } else if (model === 'openai') {
    // Placeholder for OpenAI integration
    return `OpenAI integration placeholder: ${prompt}`;
  }
  
  throw new Error(`Unknown AI model: ${model}`);
}

/**
 * API route for AI responses
 * Handles requests for both Gemini and OpenAI
 */
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { prompt, model = 'gemini' } = body as { prompt?: string; model?: AIModel };

    // Validate prompt
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: "Please enter a valid prompt" },
        { status: 400 }
      );
    }

    try {
      // Get AI response using the unified service
      const response = await getAIResponse(prompt, { model });
      
      // Return successful response
      return NextResponse.json({ 
        response,
        model
      });
    } catch (error: any) {
      console.error(`${model.toUpperCase()} API Error:`, error);
      
      // Return user-friendly error response
      return NextResponse.json(
        { 
          error: "Sorry, we're having trouble generating a response right now. Please try again in a moment.",
          model
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request processing error:", error);
    
    // Return error for malformed requests
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
} 