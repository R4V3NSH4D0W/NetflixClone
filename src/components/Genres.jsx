import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useEffect } from 'react';
import axios from 'axios';
const Genres = ({ onClick }) => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/genre/movie/list?api_key=264eebac5b8050acaf8f7989149f23ec&language=en-US`
            );
            setGenres(response.data.genres);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
  return (
    <>
    <span className=' text-white m-4 text-xl font-bold'>Genres</span>
    <div className='flex flex-wrap justify-center gap-2 mt-4'>
    {genres.map((genre) => (
          <Link to={`/search?genre=${genre.id}`} key={genre.id} onClick={()=>onClick(genre.id)}>
      <div
        className='bg-gray-200 py-1 px-2 rounded-lg w-[9rem] shadow-md text-center hover:bg-gray-400 cursor-pointer text-gray-700 font-medium text-sm whitespace-nowrap'
        key={genre.id}
      >
        {genre.name}
      </div>
      </Link>
    ))}
  </div>
    </>
   
  
  )
}

export default Genres