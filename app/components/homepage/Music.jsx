import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Music = () => {
  return (
    <div className="flex flex-col justify-between bg-black">
      {/* Heading Section - Top */}
      <div className="h-2/5 flex justify-center items-start">
        <h1 className="text-3xl text-center md:text-6xl font-bold text-white">
          Music
        </h1>
      </div>

      {/* Lottie Animation - Bottom */}
      <div className="h-3/5 flex justify-center items-end bg-white">
        <DotLottieReact
          src="https://lottie.host/a9a4ac5d-a3dc-4c93-b566-3e84e083f03d/ksHNBFTR7G.lottie"
          loop
          autoplay
          className="md:w-56 h-56 l:w-80 h-80" 
        />
      </div>
    </div>
  );
};

export default Music;
