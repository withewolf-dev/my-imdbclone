import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";



export default function TrailerCard({ Title, id, image }) {


    const [Trailer, setTrailer] = useState();
    const [loading, setloading] = useState(false)


  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/YouTubeTrailer/k_wU40d8hY/${id}`)
      .then((value) => {
        console.log(value.data.videoId, "trailerId");
        setTrailer(value.data && value.data.videoId);
      });
  }, []);

  console.log(Trailer);

  return (
    <>
      <ul
        
        key={id}
        onClick={() => Router.push(`https://www.youtube.com/watch?v=${Trailer}`)}
      >
        <h1>
          {Title}
          {Trailer}
        </h1>
        {/* <img src={image} alt={Trailer} /> */}
        {!Trailer && <h2>Loading .. wait</h2>}
        {Trailer &&
        <div>
        <iframe width="360" height="215" src={`https://www.youtube.com/embed/${Trailer}`} frameborder="0"></iframe>
        </div>
        }
      </ul>
    </>
  );
}
