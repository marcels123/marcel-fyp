// // Navigation bar

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center w-screen">
      <Link href="/" className="text-xl font-bold">
        AI & Digital Media
      </Link>
      <div className="flex flex-grow justify-evenly">
        <Link href="/" className="px-4">Home</Link>
        <Link href="/site/media/applications" className="px-4">Applications</Link>
        <Link href="/media/history" className="px-4">History</Link>
        <Link href="/account/profile" className="px-4">My Account</Link>
        <Link href="/authentication/signin" className="px-4">Sign In</Link>
      </div>
    </nav>
  );
}

