import React from "react";
import Router from "next/router";

export default function  MovieCard({ Image, Title, Id, Rating }) {
  console.log(Image, Title);

  


  const truncateString=(str, num)=> {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
  

  return (
    <>
      <div key={Id} onClick={()=>Router.push(`/movie/${Id}`)}>
                <div className="bg-gray-400 h-96 w-48 py-4">
                    <div className="p-1 bg-gray-600">
                        <img
                        src={`http://image.tmdb.org/t/p/original/${Image}`}
                        alt={Title}
                        className="h-56  w-48 object-fill"
                        />
                    </div>
                    <div className="space-y-3">
                        <h2>{Rating}</h2>
                        <p>{truncateString(Title,22)}</p>
                        <p>{Id}</p>
                    </div>
                </div>
            </div>

    </>
  );
}
