import React, { useEffect, useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";


export default function git() {

    const scroller = useRef();
    
   const handleRightclick=()=>{
        // scroller.current.scrollLeft() + 80
        scroller ? scroller.current.scrollLeft += 740 : null
       
   }

   const handleLeftClick=()=>{
    scroller ? scroller.current.scrollLeft -= 740 : null
    
}

   console.log(scroller);
  return (
    <>
      <h1>carousel</h1>
      <div className="flex justify-center">

          <h1 className="text-2xl items-center" onClick={handleLeftClick}>ARROW PREV</h1>

        <div ref={scroller}   className="no-scrollbar flex  overflow-x-scroll w-carousel">
          <img
            className="h-26  w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />

          <img
            className=" h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />
          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610298124489-e00ad8c2ad42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            alt="series"
          />
          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610066708669-9ecdf238fe8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            alt="series"
          />

          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />

          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />

          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />

          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />

          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />
          
          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />
          <img
            className="h-26 w-40 p-2"
            src="https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&26=format&fit=crop&w=200&q=80"
            alt="series"
          />

          
        </div>
        
          <h1 className="text-2xl items-center" onClick={handleRightclick}>ARROW NEXT</h1>
      </div>
    </>
  );
}
