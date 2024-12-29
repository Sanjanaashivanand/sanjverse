import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Books = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="w-full flex justify-center items-center">
        <DotLottieReact
        src="https://lottie.host/1f6e571b-028f-46e7-abab-e1e35687e109/LDoqVdhREi.lottie"
        loop
        autoplay
        />
        </div>

        <div className=" w-full flex justify-center items-center">
            <h1 className='text-3xl text-left md:text-5xl font-bold text-blue-900'>Books</h1>
        </div>
    </div>
  )
}

export default Books