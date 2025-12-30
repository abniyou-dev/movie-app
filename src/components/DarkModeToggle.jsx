import React, { useState } from 'react'
import useDarkMode from '../hooks/useDarkMode';

function DarkModeToggle() {

    const [isOne, setIsOne] = useState(false);
    const [dark, setDark] = useDarkMode();

  return (
    <div className='p-1 bg-black dark:bg-white max-w-20 rounded-full cursor-pointer'>
      <div
        onClick={() => setDark(!dark)}
        className='relative flex justify-between text-xl'>
          <span>☀</span>
          <span>🌑</span>
          <span
            style={dark ? { transform: 'translateX(100%)' } : {}}
            className='absolute w-1/2 h-full rounded-full bg-white dark:bg-black  transition-all'></span>
      </div>
    </div>
  )
}

export default DarkModeToggle