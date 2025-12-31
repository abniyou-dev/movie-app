import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div
        className='max-w-300 mx-auto border-b border-neutral-950
         dark:border-gray-500 fixed w-full top-0 left-0 bg-white dark:bg-neutral-900'>
        <nav
            className='flex items-center justify-between p-5'>
            <span
                className='text-red-700 font-bold 
                    text-3xl'>
                Movie Time</span>
            <ul
                className='text-red-950 dark:text-white flex items-center
                    gap-5 [&>li:hover]:bg-gray-100 [&>li]:p-2 [&>li:hover]:rounded 
                    [&>li]:tracking-wider dark:[&>li:hover]:text-black [&>li]:transition-colors'>
                <li><Link>Home</Link></li>
                <li><Link>Movies</Link></li>
                <li><Link>Favourites</Link></li>
                <li><Link>Login</Link></li>
                <li><Link>Resgister</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar