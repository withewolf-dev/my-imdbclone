import React, { useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { Skeleton } from '@material-ui/lab';

export default function TrailerCard  ({Id,title,poster}){

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
  
    return (
      <>
      <div>
          {!trailer && <Skeleton variant="rect" width={210} height={118} />

          }
          {trailer && <iframe
          className="p-2  w-trailer-carousel-t lg:w-trailer-carousel h-trailer-carousel-h-t lg:h-trailer-carousel-h "
          src={`https://www.youtube.com/embed/${trailer && trailer[0].key}`}
          frameBorder="0"
        ></iframe> }
         
        </div>
      </>
    );
  };
  