import React, { useState } from 'react'
import Router from "next/router";
import Paper from '@material-ui/core/Paper';
import SeriesDialog from '../../../Dialog/SeriesDialog/SeriesDialog';
import { Dialog } from '@material-ui/core';

export default function SeriesCard({ Image, Title, Id, Rating }) {

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
         {/* <div onClick={()=>Router.push(`/series/${Id}`)}> */}
         <div key={Id} onClick={handleClickOpen}>

             <div className="p-2">
                <Paper elevation={3} className=" h-96 w-48 p-2 ">
                    <div className="p-1 bg-gray-600">
                        <img
                        src={`http://image.tmdb.org/t/p/original/${Image}`}
                        alt={Title}
                        className="h-56  w-48 object-fill"
                        />
                    </div>
                    <div className="space-y-3 bg-gray-600">
                        <h2>{Rating}</h2>
                        <p>{truncateString(Title,14)}</p>
                        <p>{Id}</p>
                    </div>
                </Paper>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <SeriesDialog handleClose={handleClose}  />
      </Dialog>
        </>
    )
}
