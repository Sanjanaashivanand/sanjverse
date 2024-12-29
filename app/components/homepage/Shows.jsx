import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Shows = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        {/* Title Section */}
        <div className='w-1/2'>
            <h1 className='text-5xl font-bold text-right text-white'>Shows</h1>
        </div>

      {/* Lottie Animation */}
      <div className='w-1/2'>
      <DotLottieReact
        src="https://lottie.host/cbc7ec0d-0d0f-4f75-b7fa-df1a472b7c81/z06nZheOaY.lottie"
        loop
        autoplay
        className="h-32 md:h-42"
      />
      </div>
    </div>
  );
};

export default Shows;
