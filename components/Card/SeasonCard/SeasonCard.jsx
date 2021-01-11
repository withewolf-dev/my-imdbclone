import React from 'react'


export default function SeasonCard({Id,Image,Season,Eps,Aired}) {

    return (
        <>
        <div>
            <img
            className="h-64"
            src={`http://image.tmdb.org/t/p/original/${Image}`}
            alt={Season}
            />
            <h1>{Season}</h1>
            <div className="flex space-x-2">
                <p>{Eps}</p>
                <p>{Aired}</p>
            </div>
        </div>
        </>
    )
}
