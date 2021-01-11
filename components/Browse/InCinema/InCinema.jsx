import React, { useEffect, useState } from "react";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import axios from "axios";
import dynamic from "next/dynamic";
import MovieCard from "../../../components/Card/BrowseCard/MovieCard/MovieCard";

const CarouselDynamic = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

export default function InCinema() {


  const [PopularMovies, setPopularMovies] = useState()
  const [disableFetching, setdisableFetching] = useState()
  
  useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=887fe191590495414ef3ba59578e4a8b&language=en-us&page=1`)
        .then((value) => {console.log(value.data.results); setPopularMovies(value.data && value.data.results)})
        .catch((error) => {
          console.log(error);
        });
        
    }, []);

    console.log(PopularMovies);

  return (
    <>
    {/* mobile */}
      <div className="px-2 lg:hidden">
        <h2 className=" text-2xl">In Cinema</h2>
        <div>
          <CarouselDynamic
          plugins={[
            'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 2
              }
            },
          ]}
          >
              {PopularMovies && PopularMovies.slice(0,10).map((item)=>(
                <MovieCard Image={item.poster_path} Title={item.original_title} Id={item.id} Rating={item.vote_average}/>
              ))}
          </CarouselDynamic>
        </div>
      </div>


    {/* Desktop */}
      <div className="hidden lg:block">
      <div className="px-2">
        <h2 className=" text-2xl">In Cinema</h2>
        <div>
          <CarouselDynamic
          plugins={[
            'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 6
              }
            },
          ]}
          >
              {PopularMovies && PopularMovies.slice(0,10).map((item)=>(
                <MovieCard Image={item.poster_path} Title={item.original_title} Id={item.id} Rating={item.vote_average}/>
              ))}
          </CarouselDynamic>
        </div>
      </div>
      </div>
    </>
  );
}

const images = [

    "https://images.unsplash.com/photo-1609599372693-7b3ba4b1ab51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609757837816-7ba65c0aaba7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609667372273-eaee47ec404a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609599372693-7b3ba4b1ab51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609757837816-7ba65c0aaba7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609667372273-eaee47ec404a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609599372693-7b3ba4b1ab51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609757837816-7ba65c0aaba7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1609667372273-eaee47ec404a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
]