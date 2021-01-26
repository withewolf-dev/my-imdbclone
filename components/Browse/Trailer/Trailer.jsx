import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { TrailerCarousel } from "../../utils/Carousel";

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

  console.log(comingSoon,"com");

  return (
    <>
    <TrailerCarousel>
        {comingSoon && comingSoon.map((movie) => <TrailerCard Id={movie.id} title={movie.original_title} poster={movie.poster_path} />
        )}        
      </TrailerCarousel>
      
      
    </>
  );
}


export const TrailerCard = ({Id,title,poster}) => {

  const [trailer, settrailer] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${Id && Id}/videos?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`
      )
      .then((value) => {
         value.data && settrailer(value.data.results.filter((result) => result.type === "Trailer" ));
      });
  }, [Id && Id]);

  // console.log(trailer && trailer[0],"trailer");
  // console.log(title);
  // console.log(Id && Id,"trailer Id");
  return (
    <>
    <div>
      <iframe
        className="p-2  w-trailer-carousel-t lg:w-trailer-carousel h-trailer-carousel-h-t lg:h-trailer-carousel-h "
        src={`https://www.youtube.com/embed/${trailer && trailer[0].key}`}
        frameBorder="0"
      ></iframe>
      </div>
    </>
  );
};
