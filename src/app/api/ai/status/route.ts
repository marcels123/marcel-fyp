import { NextResponse } from "next/server";
import { config } from "@/lib/ai/config";

export async function GET() {
  try {
    return NextResponse.json({
      gemini: !!config.gemini.apiKey,
      openai: !!config.openai.apiKey
    });
  } catch (error) {
    console.error("Error checking API status:", error);
    return NextResponse.json(
      { error: "Failed to check API status" },
      { status: 500 }
    );
  }
} 