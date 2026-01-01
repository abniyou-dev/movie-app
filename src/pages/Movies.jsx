import React, { useEffect, useState } from 'react'
import MovieSearch from '../components/MovieSearch'
import axios from 'axios'
import { FaIndent } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Movies() {

    const [movies, setMovies] = useState();
    const [filtredMovies, setFiltredMovies] = useState();
    const [isLoading, setIsLoadig] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoadig(true);
                const {data : response} = await axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
                setMovies(response);
                console.log(response);
            } catch(err) {
                console.log('error', err);
            } finally {
                setIsLoadig(false);
            }
        }
        fetchData();
    }, []) ;

    function handleSearch(e) {
        const filtred_movies = movies.filter(mov => mov.Title.toLowerCase().includes(e.target.value));
        setFiltredMovies(filtred_movies);
    }

  return (
    <div className='min-h-screen pt-10.25 md:pt-20.25'>
        <div className=' pt-10'>
            <MovieSearch hamdleChange={(e) => handleSearch(e)} />
            {isLoading &&  <div className='w-full flex justify-center mt-10'>
                <div className='size-10 border-2 border-red-800 
                    border-t-transparent animate-spin rounded-full'></div>
            </div>}
            <div className='p-5 grid grid-cols-2 md:grid-cols-3 
                lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5
                dark:text-white'>
                {!filtredMovies && movies && 
                movies.map((mov, ind) => 
                            <Link 
                                key={ind}
                                to={`/movie/${ind}`}
                                className='h-full border grid space-y-2 p-2
                                    rounded'>
                                <img src={mov.Poster} alt="Movie Poster" 
                                    className='aspect-square'/>
                                <span>{mov.Title}</span>
                                <span>{mov.Year}</span>
                            </Link>)}
                {filtredMovies && filtredMovies.map((mov, ind) => 
                            <Link 
                                key={ind}
                                to={`/movie/${ind}`}
                                className='h-full border grid space-y-2 p-2
                                    rounded'>
                                <img src={mov.Poster} alt="" 
                                    className='aspect-square'/>
                                <span>{mov.Title}</span>
                                <span>{mov.Year}</span>
                            </Link>)}
            </div>
        </div>
    </div>
  )
}

export default Movies