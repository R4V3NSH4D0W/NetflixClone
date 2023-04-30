import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [results,setResults]=useState([])

  const handelSubmit =async(event)=>{
    event.preventDefault();
    try{
        const response =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=264eebac5b8050acaf8f7989149f23ec&query=${query}`)
        setResults(response.data.results)
    }catch(error){
        console.log(error)
    }
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
  <div className='relative'>
  <img className='w-full h-[400px] object-cover' src='https://mebincdn.themebin.com/1664271579476.jpg' alt='/' />
  <div className='absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4 md:px-8 mx-auto max-w-md'>
    <form className="relative w-full flex" onSubmit={handelSubmit}>
      <input
        className="py-2 pl-10 pr-3 rounded-l-full flex-1 bg-gray-300 focus:outline-none sm:w-full md:w-1/2 lg:w-1/3"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        style={{ color: "black" }}
      />
      <button type="submit" className="bg-red-500 hover:bg-red-600 rounded-r-full px-4">
        <FaSearch className="text-white" />
      </button>
    </form>
  </div>
</div>
<div class="mx-7 sm:mx-5 md:mx-10 lg:mx-15 mt-5">
   {results.map((movie, index) => (
  <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={index}>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
      <Link to={`/info/${movie?.id}`}>
      <p className='whitespace-normal text-xl md:text-sm font-bold flex justify-center items-center h-full text-center sm:text-sm'>{movie?.title}</p>

      </Link>
    </div>
  </div>
))}
</div>

    </>
  )
}

export default Searchbar