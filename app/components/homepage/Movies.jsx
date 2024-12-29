import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Movies = () => {
  return (
    <div className="bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg relative">
      {/* Movie Ticket Container */}
      <div className="border-4 border-solid border-c-orange w-full rounded-lg flex">
        
        {/* Lottie Animation Section */}
        <div className="w-2/7 border-r-4 border-solid border-c-orange p-4 flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/49967ed7-41eb-4789-a1c9-a009746d434c/U8dIxa41fg.lottie"
            loop
            autoplay
            className="h-16 md:h-36"
          />
        </div>

        {/* Title Section */}
        <div className="w-5/7 p-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-c-l-orange">Movies</h1>
          <p className="mt-2 c-gray text-lg">What is the best way to spend time?</p>
        </div>
      </div>

      {/* Decorative Ticket Stamps */}
      <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-dashed border-c-gray rounded-lg"></div>
    </div>
  );
};

export default Movies;
