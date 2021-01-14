import React, { useState } from "react";
import Router from "next/router";
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';

import MovieDialog from "../../../Dialog/MovieDialog/MovieDialog";



export default function  MovieCard({ Image, Title, Id, Rating }) {


  console.log(Image, Title);

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const truncateString=(str, num)=> {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
  

  return (
    <>
      {/* <div key={Id} onClick={()=>Router.push(`/movie/${Id}`)}> */}
      <div key={Id} onClick={handleClickOpen}>
            <div className="p-2">
                <Paper className="h-96 w-48 p-2">
                    <div className="p-1 bg-gray-600">
                        <img
                        src={`http://image.tmdb.org/t/p/original/${Image}`}
                        alt={Title}
                        className="h-56  w-48 object-fill"
                        />
                    </div>
                    <div className="space-y-3 bg-gray-600 h-28">
                        <h2>{Rating}</h2>
                        <p>{truncateString(Title,15)}</p>
                        <p>{Id}</p>
                    </div>
                </Paper>
                </div>
            </div>

            <Dialog fullWidth="true" maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <MovieDialog handleClose={handleClose} Id={Id} />
      </Dialog>
    </>
  );
}
