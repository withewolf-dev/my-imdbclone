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

  return (
    <>
      <TrailerCarousel>
        {comingSoon && comingSoon.map((movie) => <TrailerCard Id={movie.id} />)}
      </TrailerCarousel>
    </>
  );
}

export const TrailerCard = (Id) => {
  const [trailer, settrailer] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${Id.Id}/videos?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`
      )
      .then((value) => {
        console.log(value.data.results, "trailer");
         value.data && settrailer(value.data.results.filter((result) => result.type === "Trailer"));
      });
  }, [Id.Id]);
  return (
    <>
    <div>
      <iframe
        className="p-2 w-trailer-carousel h-trailer-carousel-h "
        src={`https://www.youtube.com/embed/${trailer && trailer.map((video)=>video.key)}`}
        frameBorder="0"
      ></iframe>
      </div>
    </>
  );
};
