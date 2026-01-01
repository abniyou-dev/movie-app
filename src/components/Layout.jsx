import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

function Layout() {
  return (
    <div
        className='w-full mi-h-screen bg-white dark:bg-neutral-900'>
          <NavBar />

        <div className=''>
            <Outlet />
        </div>

        <DarkModeToggle  />
    </div>
  )
}

export default Layout