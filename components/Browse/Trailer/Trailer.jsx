import React, { useEffect, useState } from "react";
import axios from "axios";
import TrailerCard from "../../Card/BrowseCard/TrailerCard/TrailerCard";
import dynamic from 'next/dynamic'




export default function Trailer() {

    const [comingSoon, setComingSoon] = useState()
    const [disableFetching, setdisableFetching] = useState()

    

      
     

  return (
    <>
    <div>

  

      <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
       
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
      
      </div>
    </>
  );
}



        {/* <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
       
        <img src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" /> */}