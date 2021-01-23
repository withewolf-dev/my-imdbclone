import React from 'react'
import InCinema from '../components/Browse/InCinema/InCinema'
import PopularSeries from '../components/Browse/PopularSeries/PopularSeries'
import Trailer from '../components/Browse/Trailer/Trailer'
import Poster from '../components/Poster/Poster';


export default function Home() {

  

  return (
    <>  
    <div className=" bg-black  flex justify-center w-full h-full py-2 ">
      <div className="block ">
      <Poster/>
      <Trailer/>
      <InCinema/>
      <PopularSeries/>
      </div>
      
    </div>
    </>
  );
}


