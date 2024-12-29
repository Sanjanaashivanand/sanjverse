import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Music = () => {
  return (
    <div className="h flex flex-col justify-between bg-black">
      {/* Heading Section - Top */}
      <div className="h-2/5 flex justify-center items-center">
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
          className="w-36 md:w-60" 
        />
      </div>
    </div>
  );
};

export default Music;
