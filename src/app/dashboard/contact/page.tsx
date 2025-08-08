"use client";

import { useState, FormEvent } from "react";
import { submitContactForm } from "@/lib/firebase/contactService";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitContactForm({
        name,
        email,
        message: query,
      });

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Message sent successfully!'
        });
        // Clear form
        setName("");
        setEmail("");
        setQuery("");
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] space-y-7 bg-white rounded-2xl shadow-lg p-9">
        <div className="space-y-2">
          <h1 className="text-[26px] font-semibold text-gray-900">Contact Us</h1>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-[13px] text-[#6b7280]">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#635bff] text-gray-900 placeholder-gray-400 text-[15px]"
              required
            />
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-[13px] text-[#6b7280]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#635bff] text-gray-900 placeholder-gray-400 text-[15px]"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="query" className="block text-[13px] text-[#6b7280]">
              Message
            </label>
            <textarea
              id="query"
              placeholder="Type your message here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#635bff] text-gray-900 placeholder-gray-400 text-[15px]"
              rows={4}
              required
            ></textarea>
          </div>
          
          {/* Status Message */}
          {submitStatus.type && (
            <div className={`p-3 rounded-md text-sm ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-md transition-colors mt-7 font-medium text-[15px] ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#635bff] hover:bg-[#635bff]/90 text-white'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
