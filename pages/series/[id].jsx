import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Divider, Typography } from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SeasonCard from '../../components/Card/SeasonCard/SeasonCard';



export default function SeriesId() {

    const route = useRouter()
    const Id = route.query.id


    const [expanded, setExpanded] = useState(false)

    const [Trailer, setTrailer] = useState()
    const [SeriesDetails, setSeriesDetails] = useState()
    const [Cast, setCast] = useState()

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
                 setCast(respCast && respCast.data.cast.filter((actor)=>actor.known_for_department === "Acting"))
            })
        )
    }, [Id])


    const truncateString=(str, num)=> {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }


      const handleExpandClick = () => {
        setExpanded(!expanded);
      };


    return (
      <>
        <div>
          <div>
            <iframe
              width="400"
              height="315"
              src={`https://www.youtube.com/embed/${
                Trailer && Trailer.map((video) => video.key)
              }`}
            ></iframe>
          </div>

          <h1 className="text-2xl">{SeriesDetails && SeriesDetails.name}</h1>
          <div>
            <ul className="flex space-x-1">
              <li className="flex space-x-2">
                <p>Episodes</p>
                <p>{SeriesDetails && SeriesDetails.number_of_episodes}</p>
              </li>
              <Divider orientation="vertical" flexItem />
              <li className="flex space-x-2">
                {SeriesDetails &&
                  SeriesDetails.genres.map((genre) => <p>{genre.name}</p>)}
              </li>
            </ul>
          </div>
          <div>
            {SeriesDetails && (
              <ul className="flex space-x-1">
                <Divider orientation="vertical" flexItem />
                <li className="flex space-x-2">
                  <p>First aired</p>
                  <p>{SeriesDetails.first_air_date}</p>
                </li>
                <Divider orientation="vertical" flexItem />
                <li className="flex space-x-2">
                  <p>Last aired</p>
                  <p>{SeriesDetails.last_air_date}</p>
                </li>
              </ul>
            )}
          </div>
          <div className="flex justify-center">
          <CardMedia
            className=" w-3/5 h-80 object-contain mt-2"
            image={`http://image.tmdb.org/t/p/original/${
              SeriesDetails && SeriesDetails.poster_path
            }`}
            title={SeriesDetails && SeriesDetails.name}
          />
          </div>
          
          <h2 className="text-xl">Plot Summary</h2>
          <div>
            {SeriesDetails && (
              <div>
                {!expanded && (
                  <p>
                    {truncateString(SeriesDetails.overview, 99)}
                    <span onClick={handleExpandClick}>
                      <ExpandMoreIcon />
                    </span>
                  </p>
                )}
                {expanded && (
                  <p>
                    {SeriesDetails && SeriesDetails.overview}
                    <span onClick={handleExpandClick}>
                      <ExpandLessIcon />
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>
          {SeriesDetails && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Seasons {SeriesDetails.number_of_seasons}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {SeriesDetails.seasons.map((details) => (
                    <SeasonCard
                      Id={details.id}
                      Season={details.name}
                      Image={details.poster_path}
                      Eps={details.episode_count}
                      Aired={details.air_date}
                    />
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}

          {Cast && (
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
                  {Cast.map((actor) => (
                      <ul className="flex space-x-2  items-center ">
                        <li>
                          <img
                            className="h-12 rounded-full m-2"
                            src={`http://image.tmdb.org/t/p/original/${actor.profile_path}`}
                            alt={actor.name}
                          />
                        </li>
                        <li>
                          <p>{actor.name}</p>
                        </li>
                      </ul>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      </>
    );
}
