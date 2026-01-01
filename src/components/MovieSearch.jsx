import { FiSearch } from 'react-icons/fi'


function MovieSearch() {
  return (
    <div className='relative max-w-[80%] md:max-w-100 mx-auto border h-10
                border-gray-400 rounded overflow-hidden'>
                <input 
                    type="text" 
                    placeholder='Entre Your Move or Series name'
                    className='dark:text-white h-full w-[80%] px-2
                     outline-none'
                />
                <button className='w-[20%]  absolute r-0 h-full
                     place-items-center bg-red-800 text-white text-sm md:text-xl'>
                    <FiSearch /></button>
            </div>
  )
}

export default MovieSearch