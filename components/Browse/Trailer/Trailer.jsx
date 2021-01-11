import React, { useEffect, useState } from "react";
import  { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import axios from "axios";
import TrailerCard from "../../Card/BrowseCard/TrailerCard/TrailerCard";
import dynamic from 'next/dynamic'


const CarouselDynamic = dynamic(
    () => import('@brainhubeu/react-carousel'),
    { ssr: false }
  )

export default function Trailer() {

    const [comingSoon, setComingSoon] = useState()
    const [disableFetching, setdisableFetching] = useState()

    // useEffect(() => {
    //     axios
    //       .get("https://imdb-api.com/en/API/ComingSoon/k_wU40d8hY")
    //       .then((value) => {console.log(value.data.items); setComingSoon(value.data && value.data.items)})
    //       .catch((error) => {
    //         console.log(error);
    //       });
          
    //   }, [disableFetching]);

      
     

  return (
    <>
    <div>
      <CarouselDynamic
    
      >

        {/* {comingSoon && comingSoon.map((item)=>(
          <TrailerCard Title={item.fullTitle} id={item.id} image={item.image}/>
      ))} */}

      <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
       
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
      </CarouselDynamic>
      
      </div>
    </>
  );
}



        {/* <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
       
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" /> */}