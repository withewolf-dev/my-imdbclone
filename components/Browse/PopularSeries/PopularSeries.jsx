import React, { useEffect, useState } from "react";
import axios from "axios";
import SeriesCard from "../../Card/BrowseCard/SeriesCard/SeriesCard";
import Carousel from '../../../utils/Carousel'




export default function PopularSeries() {

    const [PopularSeries, setPopularSeries] = useState()

  useEffect(() => {
    
    axios
        .get(`https://api.themoviedb.org/3/tv/popular?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US&page=1`)
        .then((value) => {console.log(value.data.results); setPopularSeries(value.data && value.data.results)})
        .catch((error) => {
          console.log(error);
        });
        
  }, [])
  return (
    <>
    {/* mobile */}
      <div className="px-2 lg:hidden">
        <h2 className=" text-2xl">Popular Series</h2>
        <div>
          <Carousel>
              {PopularSeries && PopularSeries.map((item)=>(
                <SeriesCard Image={item.poster_path} Id={item.id} Title={item.original_name} Rating={item.vote_average}/>
              ))}
            </Carousel>
        </div>
      </div>


    {/* Desktop */}
      <div className="hidden lg:block">
      <div className="px-2">
        <h2 className=" text-2xl">Popular Series</h2>
        <div>
              <Carousel>
             {PopularSeries && PopularSeries.map((item)=>(
                <SeriesCard Image={item.poster_path} Id={item.id} Title={item.original_name} Rating={item.vote_average}/>
              ))}
              </Carousel>
        </div>
      </div>
      </div>
    </>
  );
}

