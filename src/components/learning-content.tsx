import React from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

interface Section {
  title: string
  content: string[]
  image?: string
}

interface LearningContentProps {
  title: string
  description: string
  sections: Section[]
}

export function LearningContent({ title, description, sections }: LearningContentProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600">
              {description}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.image && (
                  <div className="mt-6">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-lg w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Back to Learning Hub */}
          <div className="mt-12 text-center">
            <a
              href="/learn"
              className="text-[#635bff] hover:text-[#635bff]/90 font-medium flex items-center justify-center"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-1" />
              Back to Learning Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 