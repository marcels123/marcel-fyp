"use client";

import { useState } from "react";
import Link from "next/link";
// import { FiEye } from "react-icons/fi"; // Eye icon for password visibility

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f3fc]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Log In</h2>

        {/* Email Input */}
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your email"
        />

        {/* Password Input */}
        <label className="block text-gray-700 mt-4 mb-1">Password</label>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {/* <FiEye /> */}
          </button>
        </div>

        {/* Forgot Password */}
        <Link href="/forgot-password" className="text-indigo-500 text-sm mt-2 inline-block">
          Forgot password?
        </Link>

        {/* Login Button */}
        <button
          className={`w-full mt-4 py-2 rounded-md font-semibold ${
            email && password
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-indigo-200 text-indigo-400 cursor-not-allowed"
          }`}
          disabled={!email || !password}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
