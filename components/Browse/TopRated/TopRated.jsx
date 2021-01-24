import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../../components/Card/BrowseCard/MovieCard/MovieCard";
import Carousel from '../../../components/utils/Carousel'



export default function TopRated() {


  const [TopRated, setTopRated] = useState([])
  const [init, setInit] = useState(false)
  
  useEffect(() => {
      if (!init) {
        axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US&page=1`)
        .then((value) => {
          value.data && setTopRated([...value.data.results])
          setInit(true)
         })
        .catch((error) => {
          console.log(error);
        });
        
      }
    });

    console.log(TopRated,"popmov");

  return (
    <>
    {/* mobile */}
      <div className="px-2 lg:hidden">
        <h2 className=" text-2xl text-yellow-400">Top Rated</h2>
        <div>

        <Carousel>
              {TopRated.slice(0,10).map((item,index)=>(
                <MovieCard Image={item.poster_path} key_id={index} Title={item.original_title} Id={item.id} Rating={item.vote_average} key={item.id}/>
              ))}
              
              </Carousel>
        
        </div>
      </div>


    {/* Desktop */}
      <div className="hidden lg:block">
      <div className="px-2">
        <h2 className=" text-2xl text-yellow-400">Top Rated</h2>
        <div>

         
         <Carousel>
              {TopRated.slice(0,10).map((item,index)=>(
                <MovieCard key={item.id} key_id={index} Image={item.poster_path} Title={item.original_title} Id={item.id} Rating={item.vote_average}/>
              ))
              }
      </Carousel>
        </div>
      </div>
      </div>
    </>
  );
}

