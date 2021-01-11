import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    Divider,
    IconButton,
    Typography,
  } from "@material-ui/core";
  import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
  import ExpandLessIcon from "@material-ui/icons/ExpandLess";
  import React, { useEffect, useState } from "react";
  import Accordion from '@material-ui/core/Accordion';
  import AccordionSummary from '@material-ui/core/AccordionSummary';
  import AccordionDetails from '@material-ui/core/AccordionDetails';
  import {useRouter} from 'next/router'
  import axios from "axios";
  
  
  export default function MovieId() {
  
  
    const [expanded, setExpanded] = useState(false);
  
    const [Trailer, setTrailer] = useState()
    const [MovieDetails, setMovieDetails] = useState()
    const [FullCast, setfullCast] = useState([])
    const [Crew, setCrew] = useState()
  
  
     const router = useRouter()
     console.log(router.query);
  
     const Id = router.query.id
  
     const movieDetails = `https://api.themoviedb.org/3/movie/${Id}?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`
     const trailer = `https://api.themoviedb.org/3/movie/${Id}/videos?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`
     const credits = `https://api.themoviedb.org/3/movie/${Id}/credits?api_key=887fe191590495414ef3ba59578e4a8b&language=en-US`
  
  
  

    useEffect(()=>{

      const MovieData = async()=>{
        try{
          const MovieResp = await axios.get(movieDetails)
          setMovieDetails(MovieResp.data)

          const TrailerResp = await axios.get(trailer)
          console.log(TrailerResp.data);
          setTrailer(TrailerResp.data && TrailerResp.data.results.filter((result)=> result.type === "Trailer").slice(0,1))

          const CreditResp = await axios.get(credits)
          setfullCast(CreditResp.data && CreditResp.data.cast.slice(0,15))

        } catch(error){
          
          console.log(error);
        }
      }
      MovieData()
    },[])
  
     
      //console.log(FullCast);
    //  console.log(Crew);
     //console.log(MovieDetails,"new");
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  
    const truncateString=(str, num)=> {
      if (str && str.length <= num) {
        return str
      }
      return str && str.slice(0, num) + '...'
    }
    
  
  
    const description =
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive paella is This impressive paella is a perfect party dish and a fun me cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive paella is";
    return (
      <>
        <div className="p-1">
          <div>
            <iframe
              width="400"
              height="315"
              src={`https://www.youtube.com/embed/${
                Trailer && Trailer.map((video) => video.key)
              }`}
              frameBorder="0"
            ></iframe>
          </div>
          <div>
          <h2 className="text-2xl">{MovieDetails && MovieDetails.original_title}</h2>
            {MovieDetails && <p className="text-sm">{MovieDetails.tagline}</p> }
          </div>
            
          <div className="flex space-x-3">
            <p> {MovieDetails && MovieDetails.runtime} min</p>
            <Divider orientation="vertical" flexItem />
            {MovieDetails && MovieDetails.genres.map((genre)=>(
              <p className="text-sm">{genre.name}</p>
            ))}
            
          </div>
          <div>
            <CardMedia
              className=" w-3/5 h-80 object-contain"
              image={`http://image.tmdb.org/t/p/original/${MovieDetails && MovieDetails.poster_path}`}
              title={MovieDetails && MovieDetails.original_title}
            />
            <h2 className="text-xl">Plot Summary</h2>
            <div>
              {!expanded && (
                <p>
                  {truncateString(MovieDetails && MovieDetails.overview, 99 )}
                  <div onClick={handleExpandClick}>
                    <ExpandMoreIcon />
                  </div>
                </p>
              )}
              {expanded && (
                <p>
                  {MovieDetails && MovieDetails.overview}
                  <div onClick={handleExpandClick}>
                    <ExpandLessIcon />
                  </div>
                </p>
              )}
            </div>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Full Cast</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {FullCast &&
                  FullCast.map((cast) => (
                    <ul className="flex space-y-7 items-center">
                      <li className="h-10 w-10 rounded-full">
                        <img
                          className="rounded-full p-2"
                          src={`http://image.tmdb.org/t/p/original/${cast.profile_path}`}
                          alt={(cast.name, "photo")}
                        />
                      </li>
                      <li>
                        <h3>{cast.name}</h3>
                      </li>
                    </ul>
                  ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </>
    );
  }
  