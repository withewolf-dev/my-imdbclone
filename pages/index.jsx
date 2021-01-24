import React from 'react'
import AiringToday from '../components/Browse/AiringToday/AiringToday';
import InCinema from '../components/Browse/InCinema/InCinema'
import PopularSeries from '../components/Browse/PopularSeries/PopularSeries'
import TopRated from '../components/Browse/TopRated/TopRated';
import Trailer from '../components/Browse/Trailer/Trailer'
import Poster from '../components/Poster/Poster';


export default function Home() {

  

  return (
    <>  
    <div className=" bg-black  flex justify-center w-full h-full  ">
      <div className="flex flex-col  space-y-8 ">
      <Poster/>
      <Trailer/>
      <InCinema/>
      <TopRated/>
      <AiringToday/>
      <PopularSeries/>

      </div>
      
    </div>
    </>
  );
}


