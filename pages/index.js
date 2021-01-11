import React from 'react'
import InCinema from '../components/Browse/InCinema/InCinema'
import PopularSeries from '../components/Browse/PopularSeries/PopularSeries'
import Trailer from '../components/Browse/Trailer/Trailer'




export default function Home() {

  

  return (
    <>  
    <div className=" bg-gray-300 h-full py-2">
      <Trailer/>
      <InCinema/>
      {/* <PopularSeries/> */}
      {/* <h1>this is cinema</h1> */}
    </div>
    </>
  );
}


