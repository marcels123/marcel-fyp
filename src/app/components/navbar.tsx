// // // Navigation bar

// import Link from 'next/link';
// import "@/styles/globals.css";

// export default function Navbar() {
//   return (
//     <nav className="bg-[#202124] p-4 text-white flex justify-between items-center w-screen">
//       <Link href="/" className="text-xl font-bold">
//         AI & Digital Media
//       </Link>
//       <div className="flex flex-grow justify-evenly">
//         <Link href="/" className="px-4">Home</Link>
//         <Link href="/site/media/applications" className="px-4">Applications</Link>
//         <Link href="/media/history" className="px-4">History</Link>
//         <Link href="/site/learning" className="px-4">Learning</Link>
//         <Link href="/pages/interactive" className="px-4">AI Demos</Link>
//         <Link href="/pages/challenges" className="px-4">Challenges</Link>
//         <Link href="/account/profile" className="px-4">My Account</Link>
//         <Link href="/authentication/authsign" className="px-4">Sign In</Link>
//       </div>
//     </nav>
//   );
// }

// Navigation bar

import Link from 'next/link';
import "@/styles/globals.css";

export default function Navbar() {
  return (
    <nav className="bg-[#202124] p-4 text-white flex justify-between items-center w-screen">
      <Link href="/" className="text-xl font-bold">
        AI & Digital Media
      </Link>
      <div className="flex flex-grow justify-evenly">
        <Link href="/" className="px-4">Home</Link>
        <Link href="/media/applications" className="px-4">Applications</Link>
        <Link href="/media/history" className="px-4">History</Link>
        <Link href="/learning" className="px-4">Learning</Link>
        <Link href="/interactive" className="px-4">AI Demos</Link>
        <Link href="/challenges" className="px-4">Challenges</Link>
        <Link href="/account/profile" className="px-4">My Account</Link>
        <Link href="/authentication" className="px-4">Sign In</Link>
      </div>
    </nav>
  );
}
