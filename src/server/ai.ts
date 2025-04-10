"use server";

import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// OpenAI function
export async function getOpenAIResponse(prompt: string) {
  try {
    const { text } = await generateText({
      model: openai("gpt-4-turbo"),
      prompt,
    });
    return text;
  } catch (error) {
    console.error(error);
    return "Error generating OpenAI response";
  }
}

// Gemini function
export async function getGeminiResponse(prompt: string) {
  try {
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    return "Error generating Gemini response";
  }
}
