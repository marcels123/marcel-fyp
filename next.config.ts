import type { NextConfig } from "next";

/**
 * Next.js Configuration
 * 
 * This file contains all Next.js specific configuration including
 * experimental features, API settings, and build optimizations.
 * 
 * @author [Marcel]
 * @version 1.0.0
 * @since 2024
 */

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Webpack configuration for custom aliases and optimizations
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    return config
  },
  
  // Experimental features
  experimental: {
    // Server Actions configuration
    serverActions: {
      bodySizeLimit: '2mb'
    },
    // Improved handling of async operations and frame lifecycle
    scrollRestoration: true,
    optimizeCss: true
  },
  
  // TypeScript configuration
  typescript: {
    // Enable TypeScript checking during build
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    // Enable ESLint checking during build
    ignoreDuringBuilds: false,
  },
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
