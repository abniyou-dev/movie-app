import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  

  function handleClick() {
    if (!name || !email || !password) return;
    const LoginData = {
      userName : name,
      email : email,
      password: password,
    }
    localStorage.setItem('registredUser', JSON.stringify(LoginData));
    navigate('/login');
  }

  return (
    <div className='min-h-screen w-full pt-10.25 md:pt-20'>
      <div className='p-5 md:pt-20'>
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='min-h-30 border border-red-900 dark:text-white 
              mx-auto max-w-[90%] md:w-140 p-3 md:p-10 space-y-6 rounded-lg'>
            <h1 className='text-center font-bold tracking-wide text-red-600
                pt-2'>Sign Up</h1>
            <div
              className='grid gap-2'>
              <span className='dark:text-gray-300 text-sm text-neutral-900'>User Name</span>
              <input type="text" placeholder='ex : Jogn'
                onChange={(e) => setName(e.target.value)}
                className='border p-1 md:p-2 rouunded-lg border-gray-600 outline-none'/>
            </div>
            <div
              className='grid gap-2'>
              <span className='dark:text-gray-300 text-sm text-neutral-900'>Email</span>
              <input type="email" placeholder='ex : Jogn@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                className='border p-1 md:p-2 rouunded-lg border-gray-600 outline-none'/>
            </div>
            <div
              className='grid gap-2'>
              <span className='dark:text-gray-300 text-sm text-neutral-900'>Password</span>
              <input type="password" placeholder='ex : Pas22398#'
                onChange={(e) => setPassword(e.target.value)}
                className='border p-1 md:p-2 rouunded-lg border-gray-600 outline-none'/>
            </div>
            <div className='text-center mb-2'>
              <button 
                onClick={handleClick}
                className='bg-red-800 px-3 py-1 rounded text-white
              hover:bg-red-900 transition-colors cursor-pointer'>Create Account</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register 