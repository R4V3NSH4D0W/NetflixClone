import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Trailer from './Trailer';

const InfoModel = () => {
    const {id}=useParams();
    const[movie,setMovie]=useState({})
    useEffect(()=>{
        const fetchData =async()=>{
            const response =await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=264eebac5b8050acaf8f7989149f23ec`)
            setMovie(response.data)
        }
        fetchData();
    },[id])
  
  return (
    <div className=' w-full  h-[550px] text-white'>
    <div className='w-full h-full'>
        <div className=' absolute w-full h-[550px]  bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
        <div className=' absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className=' text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <p className=' text-gray-400 mt-2 text-sm'>Released: {movie?.release_date}</p>
            <p className='w-full mt-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[55%] text-gray-200'>{movie?.overview}</p>
            <p className=' text-gray-400 mt-2 text-sm'>Popularity: {movie?.popularity}</p>
            {movie?.status==="Released"? <p className=' text-green-400 mt-2 text-sm'>Status: {movie?.status}</p>:<p className=' text-yellow-400 mt-2 text-sm'>Status: {movie?.status}</p>}
        </div>
    </div>
    <div className=' ml-4'>
    <h1 className='text-3xl md:text-3xl font-bold'>Watch Trailer</h1>
    <Trailer id={id}/>
    </div>
   
</div>
  )
}

export default InfoModel