import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dialog, Paper } from "@material-ui/core";
import SearchCard from "./SearchCard/SearchCard";


export default function SearchResults({ Term,category }) {

  const [results, setresults] = useState();



  useEffect(() => {

    axios
      .get(
        `https://api.themoviedb.org/3/search/${category || "multi"}?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US&query=${Term}&page=1&include_adult=true`
      )
      .then((Value) => {
        setresults(Value.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Term]);

  console.log(category,"cat");
  return (
    <>
    <Paper elevation={2} className=" w-72 lg:w-search-result h-96  overflow-x-auto ">
      {!results && <h1>Loading</h1>}
      {results &&
        results.map((term,index) => (
          <SearchCard Id ={term.id} media={term.media_type} Img={term.poster_path} key={index} overview={term.overview} title = {term.original_title || term.original_name}/> 
        ))}
        </Paper>
  
    </>
  );
}
