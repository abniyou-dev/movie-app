import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../context/favoriteReducer';

function Movie() {

  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [onMsg, setOnMsg] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async() => {
      try {
          const {data : response} = await axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
          setMovies(response);
          console.log(response[id]);
      } catch (err) {
        console.log('error', err);
      } finally {
        console.log('done');
      }
    }
    fetchData();
  }, []);



  function hanldeClick() {
    setOnMsg(true);
    dispatch({type: "ADD", payload: movies[id]});
    const interval = setInterval(() => {
      setOnMsg(false);
    }, 2000);
  }

  const {state, dispatch} = useFavorites();

  return (
    <div
      className='relative min-h-screen pt-10.25 md:pt-20 dark:text-white'>
        <div className='p-15'>
          <span
              style={onMsg === true ? {scale: "1"} : {scale: "0"}} 
            className='absolute right-5 top-25 bg-red-800 p-2 z-50 transition-all'>added to Favourites </span>
          {movies && 
                <div className='flex justify-start items-start gap-5'>
                    <img src={movies[id].Poster} />  
                    <div
                      className='grid gap-5'> 
                      <span>{movies[Number(id)].Title}</span>
                      <span>{movies[Number(id)].Year}</span>
                      <span>{movies[Number(id)].Runtime}</span>
                      <button 
                        onClick={() => hanldeClick()}
                        className='cursor-pointer bg-red-800 p-2 rounded
                          hover:bg-red-900 transition-colors flex items-center gap-4'>
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