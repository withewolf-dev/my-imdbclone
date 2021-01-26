import { FunctionsSharp } from "@material-ui/icons";
import React, {  useRef } from "react";

export default function Carousel({children}) {


  const scroller = useRef();

  const handleRightclick = () => {
    // scroller.current.scrollLeft() + 80
   scroller ? (scroller.current.scrollLeft += 940) : null;
    // scroller.current.scrollIntoView({behavior: 'smooth'})
  };

  const handleLeftClick = () => {
    scroller ? (scroller.current.scrollLeft -= 940) : null;
  };

  console.log(scroller);

  const arrowRight = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-gray-200 hover:text-yellow-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
    </svg>
  );

  const arrowLeft = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-gray-200 hover:text-yellow-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
    </svg>
  );
  return (
    <>

      <div className=" relative  w-mobileWidth  lg:w-carousel">
        <div className=" hidden lg:flex lg:items-center lg:absolute  lg:inset-y-0 lg:left-0 ">
          <span className="bg-nav cursor-pointer  rounded-sm opacity-70 px-3  py-4 border-2 border-white" onClick={handleLeftClick}>{arrowLeft}</span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:absolute  lg:inset-y-0 lg:right-0 ">
          <span className="bg-nav cursor-pointer  rounded-sm opacity-70 px-3 py-4 border-2 border-white" onClick={handleRightclick}>{arrowRight}</span>
        </div>
        <div ref={scroller} className="flex no-scrollbar overflow-x-scroll">
          {children}
        </div>
      </div>
    </>
  );
}







export const TrailerCarousel =({children})=>{



  const scroller = useRef();

  const handleRightclick = () => {
    // scroller.current.scrollLeft() + 80
   scroller ? (scroller.current.scrollLeft += 890) : null;
    // scroller.current.scrollIntoView({behavior: 'smooth'})
  };

  const handleLeftClick = () => {
    scroller ? (scroller.current.scrollLeft -= 890) : null;
  };

  console.log(scroller);

  const arrowRight = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-gray-200 hover:text-yellow-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
    </svg>
  );

  const arrowLeft = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-gray-100 hover:text-yellow-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
    </svg>
  );
  return (
    <>
      <div className=" relative w-trailer-carousel-t lg:w-trailer-carousel bg-black">
      <div className=" hidden lg:flex lg:items-center lg:absolute  lg:inset-y-0 lg:left-0 ">
          <span className="bg-nav cursor-pointer  rounded-sm opacity-70 px-3 py-4 border-2 border-white" onClick={handleLeftClick}> {arrowLeft}</span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:absolute  lg:inset-y-0 lg:right-0 ">
          <span className="bg-nav cursor-pointer  rounded-sm opacity-70 px-3 py-4 border-2 border-white" onClick={handleRightclick}>{arrowRight}</span>
        </div>
        <div ref={scroller} className="flex no-scrollbar overflow-x-scroll ">
         
         {children}

      </div>
      </div>

    </>
  );
  
}


const video = [
  <iframe className="p-2 w-trailer-carousel h-trailer-carousel-h "  src="https://www.youtube.com/embed/OvM4hIxrqAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe  className="p-2 w-trailer-carousel h-trailer-carousel-h " src="https://www.youtube.com/embed/OvM4hIxrqAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe  className="p-2 w-trailer-carousel h-trailer-carousel-h " src="https://www.youtube.com/embed/OvM4hIxrqAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe  className="p-2 w-trailer-carousel h-trailer-carousel-h " src="https://www.youtube.com/embed/OvM4hIxrqAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe  className="p-2 w-trailer-carousel  h-trailer-carousel-h" src="https://www.youtube.com/embed/OvM4hIxrqAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
]







