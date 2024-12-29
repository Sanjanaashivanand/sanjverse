'use client';

import { useState } from 'react';
import { useTrail, animated, easings } from "@react-spring/web"

export default function Home() {
  return (
    <div className="min-h-screen p-10 grid  grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-red-500 min-h-[50px] col-span-1 md:col-span-2 flex justify-center items-center">
        <span className="text-white">Movies</span>
      </div>
      <div className="bg-blue-500 min-h-[50px] flex justify-center items-center">
        <span className="text-white">Blue</span>
      </div>
      <div className="bg-green-500 min-h-[50px] row-span-1 md:row-span-3 flex justify-center items-center">
        <span className="text-white">Green</span>
      </div>
      <div className="bg-yellow-500  min-h-[50px] row-span-1 md:row-span-2 flex justify-center items-center order-first md:order-none">
        <span className="text-white">Welcome to Sanjverse</span>
      </div>
      <div className="bg-purple-500 min-h-[50px] row-span-1 flex justify-center items-center">
        <span className="text-white">Purple</span>
      </div>
      <div className="bg-pink-500 min-h-[50px] row-span-1 md:row-span-2 flex justify-center items-center">
        <span className="text-white">Pink</span>
      </div>
      <div className="bg-teal-500 min-h-[50px] flex justify-center items-center">
        <span className="text-white">Teal</span>
      </div>
    </div>

  );
}
