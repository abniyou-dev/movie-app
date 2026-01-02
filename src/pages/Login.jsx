import React, { useState } from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {name, setName} = useAuth();
    const navigate = useNavigate();

    function handleClick() {
      const data = JSON.parse(localStorage.getItem("registredUser"));
      console.log(data);
      if (email === data.email && password === data.password) {
        setName(data.name);
        const currentUser = {
          name : data.userName,
          email: email
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        navigate("/movies");
        window.location.reload();
      }
    }


  return (
    <div className='min-h-screen w-full pt-10.25 md:pt-20'>
      <div className='p-5 md:pt-20'>
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='min-h-30 border border-red-900 dark:text-white 
              mx-auto max-w-[90%] md:w-140 p-3 md:p-10 space-y-6 rounded-lg'>
            <h1 className='text-center font-bold tracking-wide text-red-600
                pt-2'>Login In</h1>

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
              hover:bg-red-900 transition-colors cursor-pointer md:w-40'>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login