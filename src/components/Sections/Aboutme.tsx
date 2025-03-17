import React from 'react'
import AutoSlidingCarousel from '../ui/SlidingStats'

const Aboutme = () => {
  return (
    <div className='flex gap-10 justify-center'>
        <div>
            <h2>
                Hello! I'm Anshul Kardam
            </h2>
            <span>A Proffessional Full Stack Developer</span>
            <p>my description</p>
        </div>
        <AutoSlidingCarousel />
    </div>
  )
}

export default Aboutme