import { Dialog } from '@material-ui/core';
import React, { useState } from 'react'
import MovieDialog from '../../../Dialog/MovieDialog/MovieDialog';
import SeriesDialog from '../../../Dialog/SeriesDialog/SeriesDialog';

export default function SearchCard({Id,Img,overview,title,media}) {


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


       

  const truncateString=(str, num)=> {
    if (str && str.length <= num) {
      return str
    }
    return str && str.slice(0, num) + '...'
  }



    return (
       <>
       <div  key={Id} onClick={handleClickOpen} className="flex justify-center ">
            
            <div className="flex   shadow-lg rounded-sm my-2  bg-gray-400 w-96">
              <img
                src={`http://image.tmdb.org/t/p/original/${Img}`}
                className=" h-28 rounded-l-sm"
              />
              <div>
                 <h1 className="px-2 text-xl mb-2 ">{title}</h1>
                <p className="text-gray-700 whitespace-normal text-sm px-2">{truncateString(overview,70)}</p>
              </div>
            </div>
            </div>
            <Dialog  fullWidth maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
         {media && media === "tv" && <SeriesDialog handleClose={handleClose} Id={Id}  />}
        {media && media === "movie" && <MovieDialog handleClose={handleClose} Id={Id} />}
        
      </Dialog>
       </>
    )
}
