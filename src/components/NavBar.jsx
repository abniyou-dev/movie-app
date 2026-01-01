import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function NavBar() {

    const [isActive, setIsActive] = useState(true);
    
  return (
    <div
        className='mx-auto border-b border-neutral-950 z-60
         dark:border-gray-500 fixed w-full top-0  bg-white dark:bg-neutral-900'>
        <nav
            className='flex items-center justify-between p-2 md:p-5 relative '>
            <span
                className='text-red-700 font-bold 
                    text-md md:text-3xl'>
                Movie Time</span>
            <ul
                className='text-red-950 dark:text-white hidden items-center
                    gap-5 [&>li:hover]:bg-gray-100 [&>li]:p-2 [&>li:hover]:rounded 
                    [&>li]:tracking-wider dark:[&>li:hover]:text-black [&>li]:transition-colors
                    md:flex'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/favorites">Favourites</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Resgister</Link></li>
            </ul>
            <button 
                onClick={() => setIsActive(!isActive)}
                className='text-neutral-900 dark:text-white text-xl md:hidden'>
                <FiMenu />
            </button>

            <ul className='absolute top-0 left-0 w-full p-5 h-screen 
                bg-white dark:bg-neutral-900 space-y-3 
                transition-all  dark:[&>li]:text-white  '
                style={isActive ? {left: "-100%"} : {left: "0"}}>
                <div className='flex justify-between'>
                    <span
                className='text-red-700 font-bold 
                    text-xl'>
                Movie Time</span>
                    <button 
                        onClick={() => setIsActive(!isActive)}
                        className='bg-neutral-600 p-2 rounded-full'><FiX /></button>
                </div>
                <li
                    onClick={() => setIsActive(!isActive)}>
                    <Link to={"/"}>Home</Link></li>
                <li
                    onClick={() => setIsActive(!isActive)}>
                    <Link to="/movies">Movies</Link></li>
                <li
                    onClick={() => setIsActive(!isActive)}>
                    <Link to="/favorites">Favourites</Link></li>
                <li
                    onClick={() => setIsActive(!isActive)}>
                    <Link to="/login">Login</Link></li>
                <li
                    onClick={() => setIsActive(!isActive)}>
                    <Link to="/register">Resgister</Link></li> 
            </ul>
        </nav>
    </div>
  )
}

export default NavBar