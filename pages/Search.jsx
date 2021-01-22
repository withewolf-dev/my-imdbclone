import { Paper } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";

export default function Search() {
  return (
    <div className="bg-gray-500 min-h-screen">
    <div className=" shadow-md rounded-sm w-48 ">
      <img
        src={`https://images.unsplash.com/photo-1610800563169-b1a9f736f9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80`}
        alt="title"
        className=" h-72 rounded-sm  hover:opacity-80 object-fill"
      />
      <div>
        <div className=" whitespace-nowrap"> <Star/> 8.1</div>
        <h1>harry potter </h1>
        <button>View option</button>
        <button>Trailer</button>
      </div>
    </div>
    </div>
  );
}
