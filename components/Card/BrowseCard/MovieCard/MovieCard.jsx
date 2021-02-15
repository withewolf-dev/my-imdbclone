import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import MovieDialog from "../../../Dialog/MovieDialog/MovieDialog";
import truncateString from "../../../utils/TruncateString";
import { Star } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";


export default function MovieCard({ movie,Image, Title, Id, Rating, key_id }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const PlayButton = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        class="ipc-icon ipc-icon--play-arrow ipc-button__icon ipc-button__icon--pre"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="presentation"
      >
        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path>
      </svg>
    );
  };

  return (
    <>
     
      <div key={Id} onClick={handleClickOpen} className="p-2">
        <div className=" bg-card shadow-lg rounded-sm w-48  ">
          <img
            src={`http://image.tmdb.org/t/p/original/${Image}`}
            alt={Title}
            className=" h-72 rounded-sm cursor-pointer object-fill"
          />
          <div className="mx-2 space-y-2 ">
            <div className=" whitespace-nowrap text-gray-400 text-lg">
              {" "}
              <Star style={{ fontSize: 18, color: yellow[700] }} />
              {Rating}
            </div>
            <div className="space-y-4">
              <div className="text-gray-300 hover:underline">
                {truncateString(Title, 15)}{" "}
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-sm p-2 hover:bg-gray-700  flex justify-center">
                  <div className=" text-blue-400 text-sm">View option</div>
                </div>
                <div className="flex justify-center pb-4 ">
                  <div className="text-gray-300 hover:bg-gray-700 rounded-sm px-4 flex"> <PlayButton/>Trailer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <MovieDialog key_id={key_id} handleClose={handleClose} Id={Id} />
      </Dialog>
    </>
  );
}
