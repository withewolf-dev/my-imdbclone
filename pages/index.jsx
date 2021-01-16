import React from 'react'
import InCinema from '../components/Browse/InCinema/InCinema'
import PopularSeries from '../components/Browse/PopularSeries/PopularSeries'
import Trailer from '../components/Browse/Trailer/Trailer'




export default function Home() {

  

  return (
    <>  
    <div className=" bg-gray-300 flex justify-center w-full h-full py-2 ">
      <div className="block">
      <InCinema/>
      <PopularSeries/>
      </div>
      
    </div>
    </>
  );
}


