"use client"

import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const aiFields = [
  {
    title: 'Games',
    description: 'Explore how AI is revolutionizing the game industry including Content Generation, Game mechanics, and AI-powered NPC Behaviour and Animation.',
    image: '/images/games-ai.jfif',
    href: '/dashboard/learn/games',
  },
  {
    title: 'Music',
    description: 'Explore how AI is revolutionizing the Music industry including AI-Generated Music, and AI Mixing and Mastering.',
    image: '/images/music-ai.jfif',
    href: '/dashboard/learn/music',
  },
  {
    title: 'Film',
    description: 'Explore how AI is revolutionizing the film industry, including deepfake detection and AI-powered video enhancements.',
    image: '/images/film-ai.jfif',
    href: '/dashboard/learn/film',
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore AI in Different Fields
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how artificial intelligence is transforming various industries and shaping our future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiFields.map((field) => (
            <div
              key={field.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={field.image}
                    alt={`${field.title} AI`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-lg font-medium">
                    {field.title} AI
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {field.title}
                  </h2>
                  <p className="text-gray-600 flex-grow mb-4">
                    {field.description}
                  </p>
                  <Link
                    href={field.href}
                    className="text-[#635bff] font-medium hover:text-[#635bff]/80 transition-colors duration-200 flex items-center justify-center w-full py-2 rounded-full hover:bg-gray-50"
                  >
                    Learn more
                    <ArrowRightIcon className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 