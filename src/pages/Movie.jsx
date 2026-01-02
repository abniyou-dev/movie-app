import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../context/favoriteReducer';
import { useAuth } from '../context/authContext';

function Movie() {

  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [onMsg, setOnMsg] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async() => {
      try {
          setIsLoading(true);
          const {data : response} = await axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
          setMovies(response);
      } catch (err) {
        console.log('error', err);
      } finally {
          setIsLoading(false);

      }
    }
    fetchData();
  }, []);
  const {name} = useAuth();



  function hanldeClick() {
    if (!name) return;

    setOnMsg(true);
    dispatch({type: "ADD", payload: movies[id]});
    const interval = setInterval(() => {
      setOnMsg(false);
    }, 2000);
  }

  const {state, dispatch} = useFavorites();

  return (
    <div
      className='relative min-h-screen pt-10.25 md:pt-20 dark:text-white max-w-300 mx-auto'>
        <div className='p-15'>
          {isLoading &&  <div className='w-full flex justify-center mt-10'>
                <div className='size-10 border-2 border-red-800 
                    border-t-transparent animate-spin rounded-full'></div>
            </div>}
          <span
              style={onMsg === true ? {scale: "1"} : {scale: "0"}} 
            className='absolute right-5 bottom-5 bg-red-800 p-2 z-50 transition-all'>added to Favourites </span>
          {movies && 
                <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-5'>
                    <img src={movies[id].Poster} />  
                    <div
                      className='flex flex-col gap-5 text-center md:text-start'> 
                      <span>{movies[Number(id)].Title}</span>
                      <span>{movies[Number(id)].Year}</span>
                      <span>{movies[Number(id)].Runtime}</span>
                      <button 
                        onClick={() => hanldeClick()}
                        className='cursor-pointer bg-red-800 p-2 rounded text-white
                          hover:bg-red-900 transition-colors flex 
                          items-center gap-4 text-[12px] md:text-[16px]'>
                        <span>Add To Favorites</span> <FiHeart />
                        {/* <AiFillHeart /> */}
                    </button>
                    </div>
                    
                </div>} 
          {errorMsg && <span className='text-red-400'>{errorMsg}</span>}
        </div>
    </div>
  )
}

export default Movie