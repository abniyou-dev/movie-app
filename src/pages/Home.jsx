import React from 'react'
import DarkModeToggle from '../components/DarkModeToggle';
import movie from '../assets/movie.jpg'

function Home() {



  return (
    <div 
      className='landing w-full min-h-screen' >
        <div className='w-full min-h-screen bg-black/75 grid 
          place-content-center px-5 text-white text-center gap-5'>
          <h1 className='text-3xl font-semibold'>Movie Time</h1>
          <span className='text-md'>The #1 Platform for watching your facouties series and 
          movies</span>
          <button
            className='bg-red-900 w-fit px-5 mmd:px-20 mx-auto py-1 rounded-lg
                font-bold tracking-wide cursor-pointer hover:bg-red-950
                transition-colors'>Join Now!</button>
        </div>
    </div>
  )
}

export default Home