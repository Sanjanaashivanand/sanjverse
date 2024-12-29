import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Recipes = () => {
  return (
    <div className='flex flex-col justify-center pb-10'>
        <div>
        <DotLottieReact
    src="https://lottie.host/a9b46f74-191a-4e24-9113-1acdfc293af9/9vrQrrk8jK.lottie"
    loop
    autoplay
  />
        </div>

        <div>
            <h1 className='text-5xl font-bold text-center text-primary'>Recipes</h1>
        </div>
    </div>
  )
}

export default Recipes