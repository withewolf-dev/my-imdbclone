import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper } from "@material-ui/core";

export default function InSimilar({ Id,name }) {
  const [similar, setSimilar] = useState();

  const truncateString = (str, num) => {
    if (str && str.length <= num) {
      return str;
    }
    return str && str.slice(0, num) + "...";
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${Id}/similar?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US&page=1`
      )
      .then((value) => {
        setSimilar(value.data.results);
      })
      .catch((error) => console.log(error));
  }, [Id]);

  return (
    <>
      <div class="grid grid-cols-3 gap-4 mt-4">
        {similar &&
          similar.map((movie) => (
            <Paper key={name}>
              <div className="flex  bg-gray-800 rounded-sm ">
                <img
                  className=" h-40 rounded-sm"
                  src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
                <div className=" text-gray-200 mx-2">
                  <h1 className="text-lg">{movie.original_title}</h1>
                  <p className="text-sm text-gray-300">
                    {truncateString(movie.overview, 60)}
                  </p>
                </div>
              </div>
            </Paper>
          ))}
      </div>
    </>
  );
}
