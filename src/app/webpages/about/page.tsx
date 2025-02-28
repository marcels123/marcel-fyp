// About page for the FYP and what I am looking to solve

import React from "react";
import "@/styles/globals.css";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">About This Project</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl text-center">
        This project explores the relationships and applications of AI in different forms of digital media.        
      </p>
    </div>
  );
}
