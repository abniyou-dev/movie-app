import React, { useEffect } from 'react'
import { useFavorites } from '../context/favoriteReducer'
import { FiHeart, FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Favorites() {

  const {state, dispatch} = useFavorites();
  const navigate = useNavigate();

  useEffect(() =>{
    const user = localStorage.getItem('currentUser');
    !user ? navigate('/login') : null
  }, [])

  return (
    <div
      className='min-h-screen dark:text-white pt-10.25 md:pt-20'>
        <div className='p-5 space-y-5 max-w-300 mx-auto'>
          <h1>Favourites movies</h1>
          <span>total Moves : {state.movies.length}</span>
          <div className='py-5 grid gap-3'> 
            {state.movies.map((mov, ind) => 
            <div key={ind} 
              className='p-2 border flex flex-col md:flex-row items-center
               justify-between '>
              <div className='flex flex-col md:flex-row gap-2 space-y-4 md:space-y-0'>
                <img src={mov.Poster} alt="movie image" 
                className='w-[50%] md:size-20 mx-auto' />
                <div className='grid text-center md:text-start space-y-4'>
                  <span>{mov.Title}</span>
                  <span>{mov.Year}</span>
                </div>
              </div>
              <button
                onClick={() => dispatch({type: "REMOVE", payload: mov})}
               className='block p-3 md:p-5 bg-neutral-900 dark:bg-neutral-700 text-white  rounded-full md:mr-5 my-3 md:my-0 '>
                <FiTrash />
              </button>
            </div>
          )}
          </div>
        </div>

    </div>
  )
}

export default Favorites