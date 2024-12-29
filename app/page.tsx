'use client';

import { useState } from 'react';

export default function Home() {
  // State for interaction (optional)
  const [hovered, setHovered] = useState(false);

  return (
    <main className="h-[calc(100vh-6rem)] flex justify-center items-center relative">
      {/* Enhanced Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-pink-400 to-yellow-300 opacity-40 animate-pulse" />

      {/* Welcome Text with Neon Effect */}
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl font-bold text-pink-600 drop-shadow-2xl">
          Welcome to Sanjverse!
        </h1>
        <p className="text-2xl font-light animate-bounce text-cyan-500 mt-4 drop-shadow-lg">
          Explore my world through movies, shows, music and more.
        </p>
      </div>
    </main>
  );
}
