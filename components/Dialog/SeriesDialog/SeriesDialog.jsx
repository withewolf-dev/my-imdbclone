import React, { useEffect, useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, TextField } from "@material-ui/core";
import axios from 'axios'
import Rating from '@material-ui/lab/Rating';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";


export default function SeriesDialog({handleClose,Id}) {


  const [expanded, setExpanded] = useState(false)

    const [Trailer, setTrailer] = useState()
    const [SeriesDetails, setSeriesDetails] = useState()
    const [Cast, setCast] = useState()
    const [Crew, setCrew] = useState()

    const trailer = `https://api.themoviedb.org/3/tv/${Id}/videos?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`
    const seriesDetails = `https://api.themoviedb.org/3/tv/${Id}?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`
    const cast =`https://api.themoviedb.org/3/tv/${Id}/credits?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`

    const ReqTrailer = axios.get(trailer)
    const ReqseriesDetails = axios.get(seriesDetails)
    const ReqCast = axios.get(cast)

    useEffect(() => {
    
        axios.all([ReqTrailer,ReqseriesDetails,ReqCast]).then(
            axios.spread((...response)=>{
                
                const respTrailer = response[0]
                const respseriesDetails = response[1]
                const respCast = response[2]

                console.log(respCast.data.cast,"cast")

                setTrailer((respTrailer && respTrailer.data.results.filter((result)=> result.type === "Trailer" || "Teaser").slice(0,1)))
                setSeriesDetails(respseriesDetails && respseriesDetails.data)
                setCast(respCast && respCast.data.cast.filter((actor)=>actor.known_for_department === "Acting").slice(0,3))
                setCrew(respCast && respCast.data)
            })
        )
    }, [])


    const truncateString=(str, num)=> {
        if (str && str.length <= num) {
          return str
        }
        return  str && str.slice(0, num) + '...'
      }


      const handleExpandClick = () => {
        setExpanded(!expanded);
      };


      console.log(Crew);
      console.log(SeriesDetails,"details");

      
    return (
      <>
        <div className="overflow-x-hidden no-scrollbar bg-black">
          <div className=" h-dialogHeight">
            {/* Desktop */}
            <div className="hidden lg:block">
              <iframe
                width="960"
                height="490"
                src={`https://www.youtube.com/embed/${
                  Trailer && Trailer.map((video) => video.key)
                }`}
                frameBorder="0"
              ></iframe>
            </div>
                {/* Mobile */}
                <div className=" visible lg:hidden">
          <iframe
            width="360"
            height="290"
            src={`https://www.youtube.com/embed/${
              Trailer && Trailer.map((video) => video.key)
            }`}
            frameBorder="0"
          ></iframe>
          </div>
          {/* ----!!! ---- */}
            <DialogContent>
              <div className="flex space-x-3 lg:space-x-10 text-sm">
                <Rating name="size-small" defaultValue={2} size="small" />

                <p className="text-gray-200">
                  {SeriesDetails && SeriesDetails.vote_average}
                </p>

                <p className="text-gray-300">
                  Episodes: {SeriesDetails && SeriesDetails.number_of_episodes}
                </p>
                <p className="text-gray-300">
                  <div className="flex">
                  Seasons:<p className="text-gray-50">{SeriesDetails && SeriesDetails.number_of_seasons}</p>
                  </div>
                </p>
              </div>
              <div class="block lg:flex mt-3">
                <div class="lg:w-3/5">
                  {!expanded && (
                    <p className="not-italic text-gray-300  text-lg">
                      {truncateString(
                        SeriesDetails && SeriesDetails.overview,
                        99
                      )}
                      <div onClick={handleExpandClick}>
                        <ExpandMoreIcon />
                      </div>
                    </p>
                  )}
                  {expanded && (
                    <p className="not-italic text-gray-300 text-lg">
                      {SeriesDetails && SeriesDetails.overview}
                      <div onClick={handleExpandClick}>
                        <ExpandLessIcon />
                      </div>
                    </p>
                  )}
                </div>
                <div class="lg:w-2/5 text-gray-100 lg:flex lg:justify-end space-x-1">
                  <div class="block space-y-3">
                    <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm">Cast:</p>
                      <div className="flex flex-wrap">
                      {Cast &&
                        Cast.map((cast) => (
                          <p className="text-gray-200 text-base lg:text-sm px-1">{cast.name}</p>
                        ))}
                        </div>
                    </div>
                    <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm">Creator:</p>
                      <div className="flex flex-wrap">
                      {SeriesDetails &&
                        SeriesDetails.created_by.map((creator) => (
                          <p className="text-gray-200 text-base lg:text-sm px-1">
                            {creator.name}
                          </p>
                        ))}
                    </div>
                    </div>
                    <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm">Genres :</p>
                      <div className="flex flex-wrap">
                      {SeriesDetails &&
                        SeriesDetails.genres.map((genre) => (
                          <p className="text-gray-200 text-base lg:text-sm px-1">{genre.name}</p>
                        ))}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-4xl mt-3">More Like this</p>
            </DialogContent>
          </div>
        </div>
      </>
    );
}
