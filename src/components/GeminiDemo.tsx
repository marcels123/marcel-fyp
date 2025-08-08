"use client";

import { useState } from "react";

export default function GeminiDemo() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to generate response");
      }

      setResponse(data.response);
    } catch (error: any) {
      console.error("Error:", error);
      setResponse(error.message || "Failed to generate response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Gemini AI Demo</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your prompt
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#635bff] focus:border-[#635bff]"
            rows={4}
            placeholder="Ask Gemini anything..."
          />
        </div>

        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="w-full bg-[#635bff] text-white py-2 px-4 rounded-md hover:bg-[#635bff]/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate Response"}
        </button>
      </form>

      {response && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Response:</h3>
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="whitespace-pre-wrap">{response}</p>
          </div>
        </div>
      )}
    </div>
  );
} 