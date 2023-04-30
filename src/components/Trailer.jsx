import React from 'react'
import { useState, useEffect } from 'react'
const Trailer = ({id}) => {
    const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=264eebac5b8050acaf8f7989149f23ec&language=en-US`);
      const data = await response.json();
      setMovie(data);
    };

    const fetchTrailer = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=264eebac5b8050acaf8f7989149f23ec&language=en-US`);
      const data = await response.json();
      const trailerVideo = data.results.find((video) => video.type === "Trailer");
      if (trailerVideo) {
        setTrailer(trailerVideo.key);
      }
    };

    fetchMovie();
    fetchTrailer();
  }, [id]);

  const renderTrailer = () => {
    if (!trailer) {
      return null;
    }

    return (
      <div className="my-4">
        <iframe
          className="mx-auto mb-8 md:w-[460px] md:h-[300px] lg:w-[560px] lg:h-[315px] xl:w-[720px] xl:h-[405px]"
          src={`https://www.youtube.com/embed/${trailer}`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  // render movie details and trailer
  return (
    <div className="container mx-auto px-4">
     
              {renderTrailer()}
            </div>
      
  );
};
export default Trailer