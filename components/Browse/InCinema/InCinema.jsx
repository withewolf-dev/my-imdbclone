import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../../components/Card/BrowseCard/MovieCard/MovieCard";
import Carousel from '../../../components/utils/Carousel'


export default function InCinema() {


  const [PopularMovies, setPopularMovies] = useState([])
  const [init, setInit] = useState(false)
  
  useEffect(() => {
      if (!init) {
        axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=887fe191590495414ef3ba59578e4a8b&language=en-us&page=1`)
        .then((value) => {
          value.data && setPopularMovies([...value.data.results])
          setInit(true)
         })
        .catch((error) => {
          console.log(error);
        });
        
      }
    });


  return (
    <>
      {/* mobile */}
      <div className="px-2 lg:hidden">
        <h2 className=" text-2xl text-yellow-400">Now Playing</h2>
        <div>
          <Carousel>
            {PopularMovies.slice(0, 10).map((item, index) => (
            <MovieCard
                Image={item.poster_path}
                key_id={index}
                Title={item.original_title}
                Id={item.id}
                Rating={item.vote_average}
                key={item.id}
              />
              
            ))}
          </Carousel>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="px-2">
          <h2 className=" text-2xl text-yellow-400">Now Playing</h2>
          <div>
            <Carousel>
              {PopularMovies.slice(0, 10).map((item, index) => (
                <MovieCard
                  movie={item}
                  key={item.id}
                  key_id={index}
                  Image={item.poster_path}
                  Title={item.original_title}
                  Id={item.id}
                  Rating={item.vote_average}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export const Loading=()=>{
  return(
    <div className="bg-gray-200 h-96 w-60">
          <h1>asdsad</h1>
        </div>
  )
}