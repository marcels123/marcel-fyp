import { NextResponse } from "next/server";
import { getGeminiResponse } from "@/lib/ai/gemini";
import { getOpenAIResponse } from "@/lib/ai/openai";
import { config } from "@/lib/ai/config";

type AIModel = 'gemini' | 'openai';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, model = 'gemini' } = body as { prompt?: string; model?: AIModel };

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: "Please enter a valid prompt" },
        { status: 400 }
      );
    }

    try {
      let response: string;
      
      // Check if API keys are configured - log technical details but return user-friendly messages
      if (model === 'gemini' && !config.gemini.apiKey) {
        console.error('Gemini API key is not configured. Please add GOOGLE_GEMINI_API_KEY to your environment variables.');
        return NextResponse.json(
          { 
            error: "This AI model is currently unavailable. Please try again later or contact support.",
            model
          },
          { status: 503 }
        );
      }
      
      if (model === 'openai' && !config.openai.apiKey) {
        console.error('OpenAI API key is not configured. Please add OPENAI_API_KEY to your environment variables.');
        return NextResponse.json(
          { 
            error: "This AI model is currently unavailable. Please try again later or contact support.",
            model
          },
          { status: 503 }
        );
      }
      
      if (model === 'gemini') {
        response = await getGeminiResponse(prompt);
      } else if (model === 'openai') {
        response = await getOpenAIResponse(prompt);
      } else {
        throw new Error(`Unknown AI model: ${model}`);
      }
      
      return NextResponse.json({ 
        response,
        model
      });
    } catch (error: any) {
      console.error(`${model.toUpperCase()} API Error:`, error);
      
      // Return user-friendly error message instead of technical details
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
    
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
} 