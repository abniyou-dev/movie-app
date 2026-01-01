import React, { useEffect, useState } from 'react'
import MovieSearch from '../components/MovieSearch'
import axios from 'axios'
import { FaIndent } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Movies() {

    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data : response} = await axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
                setMovies(response);
                console.log(response);
            } catch(err) {
                console.log('error', err);
            }
        }
        fetchData();
    }, []) 

  return (
    <div className='min-h-screen pt-10.25 md:pt-20.25'>
        <div className=' pt-10'>
            <MovieSearch />
            <div className='p-5 grid grid-cols-2 md:grid-cols-3 
                lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5
                dark:text-white'>
                {movies && movies.map((mov, ind) => 
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