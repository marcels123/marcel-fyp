// Shared sliding form for sign-in/sign-up
"use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function AuthPage() {
//   const [isRegister, setIsRegister] = useState(false);

//   return (
//     <div className="relative flex h-screen w-full items-center justify-center bg-gray-900">
//       {/* Container */}
//       <div className="relative w-[600px] h-[400px] bg-white overflow-hidden shadow-2xl rounded-2xl flex">
//         {/* Image / Overlay Section */}
//         <motion.div
//           initial={{ x: 0 }}
//           animate={{ x: isRegister ? "100%" : "0%" }}
//           transition={{ type: "spring", stiffness: 120, damping: 12 }}
//           className="absolute w-1/2 h-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl"
//         >
//           <p>{isRegister ? "Welcome Back!" : "Join Us Today!"}</p>
//         </motion.div>

//         {/* Forms Container */}
//         <div className="relative w-full flex">
//           {/* Sign In Form */}
//           <div className={`w-1/2 p-10 transition-opacity ${isRegister ? "opacity-0" : "opacity-100"}`}>
//             <h2 className="text-2xl font-bold mb-4">Sign In</h2>
//             <input type="email" placeholder="Email" className="w-full p-2 border mb-2 rounded" />
//             <input type="password" placeholder="Password" className="w-full p-2 border mb-4 rounded" />
//             <button className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
//             <p className="text-sm mt-2 text-gray-500 cursor-pointer" onClick={() => setIsRegister(true)}>Need an account? Register</p>
//           </div>

//           {/* Sign Up Form */}
//           <div className={`w-1/2 p-10 transition-opacity ${isRegister ? "opacity-100" : "opacity-0"}`}>
//             <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//             <input type="text" placeholder="Name" className="w-full p-2 border mb-2 rounded" />
//             <input type="email" placeholder="Email" className="w-full p-2 border mb-2 rounded" />
//             <input type="password" placeholder="Password" className="w-full p-2 border mb-4 rounded" />
//             <button className="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
//             <p className="text-sm mt-2 text-gray-500 cursor-pointer" onClick={() => setIsRegister(false)}>Already have an account? Sign In</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Shared sliding form for sign-in/sign-up
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function AuthPage() {
//   const [isRegister, setIsRegister] = useState(false);

//   return (
//     <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-gray-900 to-gray-700">
//       {/* Authentication Box */}
//       <div className="relative w-[800px] h-[500px] bg-white shadow-xl rounded-2xl flex overflow-hidden">

//         {/* Animated Left Section */}
//         <motion.div
//           initial={{ x: 0 }}
//           animate={{ x: isRegister ? "100%" : "0%" }}
//           transition={{ type: "spring", stiffness: 120, damping: 12 }}
//           className="absolute w-1/2 h-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl p-4"
//         >
//           <p className="text-center">{isRegister ? "Welcome Back!" : "Join Us Today!"}</p>
//         </motion.div>

//         {/* Form Container */}
//         <div className="relative w-full flex">

//           {/* Sign In Form */}
//           <div className={`w-1/2 p-10 transition-opacity ${isRegister ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
//             <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h2>
//             <input type="email" placeholder="Email" className="w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-blue-500" />
//             <input type="password" placeholder="Password" className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500" />
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md">Sign In</button>
//             <p className="text-sm mt-3 text-gray-500 cursor-pointer hover:underline" onClick={() => setIsRegister(true)}>
//               Need an account? <span className="text-blue-500 font-semibold">Register</span>
//             </p>
//           </div>

//           {/* Sign Up Form */}
//           <div className={`w-1/2 p-10 transition-opacity ${isRegister ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//             <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign Up</h2>
//             <input type="text" placeholder="Name" className="w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-indigo-500" />
//             <input type="email" placeholder="Email" className="w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-indigo-500" />
//             <input type="password" placeholder="Password" className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-500" />
//             <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md">Sign Up</button>
//             <p className="text-sm mt-3 text-gray-500 cursor-pointer hover:underline" onClick={() => setIsRegister(false)}>
//               Already have an account? <span className="text-indigo-500 font-semibold">Sign In</span>
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthSignForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-gray-100 overflow-hidden">
      <div className="relative w-full max-w-4xl h-[550px] bg-white shadow-2xl rounded-lg flex overflow-hidden">

        {/* Sliding Background Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="absolute w-1/2 h-full bg-gradient-to-br from-blue-600 to-indigo-500 flex flex-col items-center justify-center text-white text-center p-8 z-10"
        >
          <h2 className="text-3xl font-bold">{isSignUp ? "One of us?" : "New here?"}</h2>
          <p className="mt-2 text-sm">
            {isSignUp
              ? "If you already have an account, sign in!"
              : "Sign up and join us today!"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="mt-6 border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </motion.div>

        {/* Form Container */}
        <div className="relative w-full flex">
          {/* Sign In Form */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isSignUp ? "-100%" : "0%" }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className={`w-1/2 flex flex-col items-center justify-center p-10 absolute ${isSignUp ? "hidden" : "block"
              }`}
          >
            <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
            <input type="email" placeholder="Email" className="w-full p-3 mt-4 border rounded-md focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" className="w-full p-3 mt-3 border rounded-md focus:ring-2 focus:ring-blue-500" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mt-4">
              Sign In
            </button>
            <p className="text-sm mt-3 text-gray-500 cursor-pointer hover:underline" onClick={() => setIsSignUp(true)}>
              Need an account? <span className="text-blue-500 font-semibold">Register</span>
            </p>
          </motion.div>

          {/* Sign Up Form */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isSignUp ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className={`w-1/2 flex flex-col items-center justify-center p-10 absolute ${isSignUp ? "block" : "hidden"
              }`}
          >
            <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
            <input type="text" placeholder="Name" className="w-full p-3 mt-4 border rounded-md focus:ring-2 focus:ring-indigo-500" />
            <input type="email" placeholder="Email" className="w-full p-3 mt-3 border rounded-md focus:ring-2 focus:ring-indigo-500" />
            <input type="password" placeholder="Password" className="w-full p-3 mt-3 border rounded-md focus:ring-2 focus:ring-indigo-500" />
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md mt-4">
              Sign Up
            </button>
            <p className="text-sm mt-3 text-gray-500 cursor-pointer hover:underline" onClick={() => setIsSignUp(false)}>
              Already have an account? <span className="text-indigo-500 font-semibold">Sign In</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



