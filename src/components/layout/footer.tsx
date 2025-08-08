import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Copyright */}
        <div className="text-center mb-4">
          <p className="text-sm">© 2025 DigiMed AI. All rights reserved.</p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex justify-center items-center space-x-4 text-sm">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/dashboard/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/dashboard/ai-playground" className="hover:text-gray-300 transition-colors">
            AI Playground
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/dashboard/contact" className="hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/dashboard/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}