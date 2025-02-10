// Navigation bar

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        AI & Digital Media
      </Link>
      <div className="space-x-4">
      <Link href="/">Home</Link>
      <Link href="/site/media/applications">Applications</Link>
      <Link href="/media/history">History</Link>
      <Link href="/account/profile">My Account</Link>
      <Link href="/authentication/signin">Sign In</Link>
      </div>
    </nav>
  );
}
