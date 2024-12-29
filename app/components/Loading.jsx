import React from 'react'

function Loading() {
  return (
    <div className="h-[calc(100vh-8rem)] flex justify-center items-center">
      <span className="loading loading-spinner loading-lg text-secondary"></span>  {/* Increased size */}
    </div>
  )
}

export default Loading