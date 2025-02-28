// Navigation bar

import Link from 'next/link';
import "@/styles/globals.css";

export default function Navbar() {
  return (
    <nav className="bg-[#202124] p-4 text-white flex fixed w-screen">

      {/* Title */}
      <div className="flex 1 flex justify-center mr-auto">
        <Link href="/" className="text-xl font-bold">AI & Digital Media</Link>
      </div>

      {/* Navbar links */}
      <div className="flex flex-1 justify-center space-x-6 text-m mr-12">
        <Link href="/" className="hover:bg-violet-700 rounded-md px-3 py-1">Home</Link>
        <Link href="/webpages/about" className="hover:bg-violet-700 rounded-md px-2 py-1">About</Link>
        <Link href="/webpages/applications" className="hover:bg-violet-700 rounded-md px-2 py-1">Applications</Link>
        <Link href="/webpages/history" className="hover:bg-violet-700 rounded-md px-2 py-1">History</Link>
        <Link href="/webpages/learning" className="hover:bg-violet-700 rounded-md px-2 py-1">Learning</Link>
        <Link href="/webpages/interactive" className="hover:bg-violet-700 rounded-md px-2 py-1">AI Demos</Link>
        <Link href="/webpages/challenges" className="hover:bg-violet-700 rounded-md px-2 py-1">Challenges</Link>
        <Link href="/account/profile" className="hover:bg-violet-700 rounded-md px-2 py-1">My Account</Link>

        {/* Sign in button */}
      <div className="flex-2 flex ml-auto">
        <Link href="/authentication" className="bg-violet-600 hover:bg-violet-700 px-2 py-2 rounded-md">Sign In</Link>
      </div>

      </div>
    </nav>
  );
}
