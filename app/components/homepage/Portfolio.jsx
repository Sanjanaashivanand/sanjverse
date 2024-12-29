import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Portfolio = () => {
  return (
    <div className='flex flex-col justify-center h-full'>
  

    <div>
    <DotLottieReact
            src="https://lottie.host/13e1a4cc-0f4d-4603-8ae6-6faf4d5d44c1/Bjgidzd8he.lottie"
            loop
            autoplay
            className="h-36" 
            />
    </div>

    <div>
        <h1 className='text-xl font-bold text-center text-black-50'>Portfolio</h1>
    </div>

    
    </div>
  )
}

export default Portfolio