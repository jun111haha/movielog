import React, { useState, useEffect } from "react";
import { moviesApi } from "../../Api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = () =>{
    const [moviePopular, setMoviePopular] = useState([]);
    const [movieUpcoming, setMovieUpComing] = useState([]);
    const [movieNowPlaying, setMovieNowPlaying] = useState([]);


    useEffect(()=>{
        async function fetchData(){
            const moviePopularRequest = await moviesApi.popular();
            const movieUpcomingRequest = await moviesApi.upcoming();
            const movieNowPlayingRequest = await moviesApi.nowPlaying();

            setMoviePopular( moviePopularRequest.data.results );
            setMovieUpComing( movieUpcomingRequest.data.results );
            setMovieNowPlaying( movieNowPlayingRequest.data.results );

        }

        fetchData();

    },[]);

    return(
        <>
        <MoviePresenter   
            moviePopular = {moviePopular}
            movieUpcoming = {movieUpcoming}
            movieNowPlaying = {movieNowPlaying}/>
        </>
    )
}

export default MovieContainer;