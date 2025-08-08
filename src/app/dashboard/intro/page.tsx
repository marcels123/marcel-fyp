"use client";

import React from 'react';
import Link from 'next/link';

export default function IntroPage() {
  return (
    <div className="min-h-screen from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Understanding AI & Digital Media
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore the intersection of artificial intelligence and digital media in the modern world
          </p>
        </div>

        {/* What is AI? Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-purple-600 mr-2"></span>
            What is Artificial Intelligence?
          </h2>
          <p className="text-gray-600 mb-4">
          Artificial intelligence (AI) is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy.
          </p>
          <div className="bg-purple-50 rounded-lg p-4 mt-4">
            <p className="text-gray-700">
              <span className="font-semibold">Common AI Applications:</span>
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
              <li>Virtual assistants (Siri, Alexa)</li>
              <li>Recommendation systems (Netflix, Spotify)</li>
              <li>Image and speech recognition</li>
              <li>Autonomous vehicles</li>
            </ul>
          </div>
        </section>

        {/* Digital Media Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-purple-600 mr-2"></span>
            What is Digital Media?
          </h2>
          <p className="text-gray-600 mb-4">
            Digital media refers to any content that is created, distributed, and consumed in digital form. 
            It encompasses everything from images and videos to websites and social media content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Traditional Media</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Print newspapers</li>
                <li>• Physical books</li>
                <li>• Television broadcasts</li>
                <li>• Radio</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Digital Media</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Social media content</li>
                <li>• Digital publications</li>
                <li>• Streaming services</li>
                <li>• Interactive content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Traditional AI vs Generative AI */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-purple-600 mr-2"></span>
            Traditional AI vs. Generative AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Traditional AI</h3>
              <p className="text-gray-600">
                Focuses on analyzing existing data and making decisions based on pre-defined rules and patterns.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Pattern recognition</li>
                <li>• Classification tasks</li>
                <li>• Predictive analysis</li>
                <li>• Rule-based decisions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Generative AI</h3>
              <p className="text-gray-600">
                Creates new content by learning patterns from existing data and generating original outputs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Text generation (ChatGPT)</li>
                <li>• Image creation (DALL-E)</li>
                <li>• Music composition</li>
                <li>• Code generation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Media Evolution Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-purple-600 mr-2"></span>
            The Evolution: Traditional to Digital Media
          </h2>
          <div className="space-y-6">
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                The transition from traditional to digital media represents a fundamental shift in how we create, 
                share, and consume content. Key differences include:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Traditional Media Characteristics</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• One-way communication</li>
                  <li>• Limited distribution reach</li>
                  <li>• Physical constraints</li>
                  <li>• Fixed content format</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Digital Media Advantages</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Interactive engagement</li>
                  <li>• Global instant reach</li>
                  <li>• Multimedia integration</li>
                  <li>• Real-time updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Explore More?</h2>
          <p className="mt-4 text-gray-600">
            Try our AI playground to see these concepts in action
          </p>
          <Link 
            href="/dashboard/ai-playground"
            className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go to AI Playground
          </Link>
        </div>
      </div>
    </div>
  );
}
