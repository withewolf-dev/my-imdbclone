import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrailerCarousel } from "../../utils/Carousel";
import TrailerCard from '../Trailer/TrailerCard/TrailerCard'



export default function Trailer() {
  const [comingSoon, setComingSoon] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US&page=1`
      )
      .then((value) => {
        setComingSoon(value.data.results.slice(4, 8));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
    <TrailerCarousel>
        {comingSoon && comingSoon.map((movie) => <TrailerCard Id={movie.id} key={movie.id} title={movie.original_title} poster={movie.poster_path} />
        )}        
      </TrailerCarousel>
      
      
    </>
  );
}



