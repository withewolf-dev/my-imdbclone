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
import InSimilar from "../../Browse/Similar/InSimilar";

export default function MovieDialog({ handleClose, Id,key_id }) {

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
    <React.Fragment key={key_id}>
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
          {/* mobile */}
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
          {/* ---!! ---!! */}
          <DialogContent>
              <div className="flex space-x-5 lg:space-x-10 text-sm">
              <Rating name="size-small" defaultValue={2} size="small" />

              <p className="text-gray-200"> {MovieDetails && MovieDetails.vote_average}</p>

              <p className="text-gray-200"> {MovieDetails && MovieDetails.runtime} min</p>
              <p className="text-gray-200"> {MovieDetails && MovieDetails.release_date}</p>
              </div>
            <div class="block lg:flex mt-3">
              <div class=" lg:w-3/5">
                {!expanded && (
                  <p className="not-italic text-gray-300  text-lg">
                    {truncateString(MovieDetails && MovieDetails.overview, 109)}
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
              <div className=" block  mt-2 lg:w-2/5 text-gray-100 lg:flex lg:justify-end space-x-1">
                  <div className="block  space-y-3 ">
                  <div className="flex space-x-2 ">
                      <p className="text-gray-400 text-sm " >Cast:</p>
                      <div className="flex flex-wrap">
                      {FullCast && 
                      FullCast.map((cast)=>(
                        <p className="text-gray-200  text-base lg:text-sm  px-1">{cast.name}</p>
                     )) }
                     </div>
                  </div>
                  <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm ">Director :</p>
                      {Crew && 
                      Crew.map((director)=>(
                        <p className="text-gray-200 text-base lg:text-sm px-1">{director.name}</p>
                     )) }
                  </div>
                  <div className="flex space-x-2">
                      <p className="text-gray-400 text-sm ">Genres:</p>
                      <div className="flex flex-wrap ">
                      {MovieDetails && 
                      MovieDetails.genres.map((genre)=>(
                        <p className="text-gray-200 text-base lg:text-sm px-1">{genre.name}</p>
                     )) }
                     </div>
                  </div>
                  </div>
              </div>
            </div>
            <p className="text-gray-200 mt-5 lg:mt-0 text-4xl ">More Like this</p>
            <InSimilar key={key_id} name={movieDetails && movieDetails.original_title} Id={Id}/>
          </DialogContent>
        </div>
      </div>
    </React.Fragment>
  );
}


