// Website Homepage
"use client"

import Link from "next/link"
import { InfoCircledIcon, ReaderIcon, LightningBoltIcon, CodeIcon, GearIcon, RocketIcon, ChatBubbleIcon, StackIcon } from "@radix-ui/react-icons"

export default function IntroPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to My Final Year Project
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Learn about AI, and explore its applications and effects on Digital Media
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* About Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-purple-600 mb-4">
              <InfoCircledIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">About</h3>
            <p className="text-gray-600 mb-4">
              Learn about this project and its objectives. Explore the impact and applications of AI in various forms of digital media.
            </p>
            <Link href="/dashboard/about" className="text-purple-600 hover:text-purple-700 font-medium">
              Learn more →
            </Link>
          </div>

          {/* Learning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-purple-600 mb-4">
              <ReaderIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning</h3>
            <p className="text-gray-600 mb-4">
              Explore interactive learning content about AI and digital media. Discover how AI is transforming various industries.
            </p>
            <Link href="/dashboard/learn" className="text-purple-600 hover:text-purple-700 font-medium">
              Start learning →
            </Link>
          </div>

          {/* AI Playground Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-purple-600 mb-4">
              <LightningBoltIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Playground</h3>
            <p className="text-gray-600 mb-4">
              Test and compare different AI models including Gemini. Experience their unique capabilities in real-time.
            </p>
            <Link href="/dashboard/ai-playground" className="text-purple-600 hover:text-purple-700 font-medium">
              Try it out →
            </Link>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Modern Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-purple-600 mb-2">
                <CodeIcon className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">Next.js</h3>
              <p className="text-sm text-gray-600">React Framework & APIs</p>
            </div>
            <div className="text-center">
              <div className="text-purple-600 mb-2">
                <ChatBubbleIcon className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">AI APIs</h3>
              <p className="text-sm text-gray-600">Gemini & OpenAI</p>
            </div>
            <div className="text-center">
              <div className="text-purple-600 mb-2">
                <StackIcon className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">Firebase</h3>
              <p className="text-sm text-gray-600">Authentication & Database</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to get started?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join us in exploring the fascinating world of artificial intelligence.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              href="/authentication/login"
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Log in
            </Link>
            <Link 
              href="/authentication/register"
              className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
