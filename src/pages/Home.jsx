import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import DarkModeToggle from '../components/DarkModeToggle';

function Home() {

  const [dark, setDark]= useDarkMode();

  return (
    <div className='p-10 text-5xl w-full min-h-screen ' >
    </div>
  )
}

export default Home