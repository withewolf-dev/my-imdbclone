import React, { useEffect, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, Dialog, Divider, TextField } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import axios from "axios";
import Rating from '@material-ui/lab/Rating';

export default function MovieDialog({ handleClose, Id }) {

  const [expanded, setExpanded] = useState(false);

  const [Trailer, setTrailer] = useState();
  const [MovieDetails, setMovieDetails] = useState();
  const [FullCast, setfullCast] = useState([]);
  const [Crew, setCrew] = useState();

  const movieDetails = `https://api.themoviedb.org/3/movie/${Id}?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`;
  const trailer = `https://api.themoviedb.org/3/movie/${Id}/videos?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`;
  const credits = `https://api.themoviedb.org/3/movie/${Id}/credits?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`;

  useEffect(() => {
    const MovieData = async () => {
      try {
        const MovieResp = await axios.get(movieDetails);

        const TrailerResp = await axios.get(trailer);

        const CreditResp = await axios.get(credits);

        setMovieDetails(MovieResp.data);
        setTrailer(
          TrailerResp.data &&
            TrailerResp.data.results
              .filter((result) => result.type === "Trailer")
              .slice(0, 1)
        );
        setfullCast(CreditResp.data && CreditResp.data.cast.slice(0, 3));
        CreditResp &&  setCrew(CreditResp.data.crew.filter((member)=>member.job === "Director"))
      } catch (error) {
        console.log(error);
      }
    };
    MovieData();
  }, []);



  const truncateString=(str, num)=> {
    if (str && str.length <= num) {
      return str
    }
    return str && str.slice(0, num) + '...'
  }
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(MovieDetails);

  return (
    <>
      <div className="overflow-x-hidden no-scrollbar bg-black">
        <div className=" h-dialogHeight">
          <iframe
            width="960"
            height="490"
            src={`https://www.youtube.com/embed/${
              Trailer && Trailer.map((video) => video.key)
            }`}
            frameBorder="0"
          ></iframe>
          <DialogContent>
              <div className="flex space-x-10 text-sm">
              <Rating name="size-small" defaultValue={2} size="small" />

              <p className="text-gray-200"> {MovieDetails && MovieDetails.vote_average}</p>

              <p className="text-gray-200"> {MovieDetails && MovieDetails.runtime} min</p>
              <p className="text-gray-200"> {MovieDetails && MovieDetails.release_date}</p>
              </div>
            <div class="flex mt-3">
              <div class="w-3/5">
                {!expanded && (
                  <p className="not-italic text-gray-300  text-lg">
                    {truncateString(MovieDetails && MovieDetails.overview, 99)}
                    <div onClick={handleExpandClick}>
                      <ExpandMoreIcon />
                    </div>
                  </p>
                )}
                {expanded && (
                  <p className="not-italic text-gray-300 text-lg">
                    {MovieDetails && MovieDetails.overview}
                    <div  onClick={handleExpandClick}>
                      <ExpandLessIcon />
                    </div>
                  </p>
                )}
              </div>
              <div class="w-2/5 text-gray-100 flex justify-end space-x-1">
                  <div class="block space-y-3">
                  <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm">Cast:</p>
                      {FullCast && 
                      FullCast.map((cast)=>(
                        <p className="text-gray-200 text-sm">{cast.name}</p>
                     )) }
                  </div>
                  <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm">Director :</p>
                      {Crew && 
                      Crew.map((director)=>(
                        <p className="text-gray-200 text-sm">{director.name}</p>
                     )) }
                  </div>
                  <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm">Genres :</p>
                      {MovieDetails && 
                      MovieDetails.genres.map((genre)=>(
                        <p className="text-gray-200 text-sm">{genre.name}</p>
                     )) }
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


