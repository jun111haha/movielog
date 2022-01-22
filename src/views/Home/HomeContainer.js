import React, { useState, useEffect } from "react";
import { moviesApi, tvApi } from "../../Api";
import HomePresenter from "./HomePresenter";

const HomeContainer = () =>{
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
            <HomePresenter   
            moviePopular = {moviePopular}
            movieUpcoming = {movieUpcoming}
            movieNowPlaying = {movieNowPlaying}/>
        </>
    )
}

export default HomeContainer;
