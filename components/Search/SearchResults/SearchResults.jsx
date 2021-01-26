import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Dialog, Paper } from "@material-ui/core";
import SearchCard from "./SearchCard/SearchCard";
import { StoreContext } from "../../context/Store";
import LinearProgress from '@material-ui/core/LinearProgress';


export default function SearchResults({ Term }) {

  const [results, setresults] = useState();

  const [selectedIndex,option] = useContext(StoreContext)

  const OptionsForApi =["multi","movie","tv","person","company"]

  const category = OptionsForApi[selectedIndex]

  useEffect(() => {

    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US&query=${Term}&page=1&include_adult=true`
      )
      .then((Value) => {
        setresults(Value.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Term]);

  console.log(category);

  return (
    <>
    <div className=" w-72  lg:w-search-result h-96  overflow-x-auto ">
      {!results && <LoadingResult/>}

      {results &&
        results.map((term,index) => (
          <SearchCard Id ={term.id} media={term.media_type} Img={term.poster_path} key={index} overview={term.overview} title = {term.original_title || term.original_name}/> 
        ))}
        </div>
  
    </>
  );
}

export const LoadingResult =()=>{
  return(
    <>
    <div className="bg-card h-64">
    <LinearProgress/>
    </div>
    </>
  )
}