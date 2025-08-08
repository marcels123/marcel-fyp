import { NextResponse } from "next/server";
import { getGeminiResponse } from "@/lib/ai/gemini";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Please enter a valid prompt" },
        { status: 400 }
      );
    }

    try {
      const response = await getGeminiResponse(prompt);
      return NextResponse.json({ response });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return NextResponse.json(
        { 
          error: "Sorry, we're having trouble generating a response right now. Please try again in a moment."
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