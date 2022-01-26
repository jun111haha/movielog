import React, { useState, useEffect } from "react";
import { tvApi } from "../../Api";
import TvPresenter from "./TvPresenter";



const TvContainer = () => {
    const [topRated , setTopRated] = useState([]);
    const [popular , setPopular] = useState([]);
    const [airingToday , setAiringToday] = useState([]);
    const [netflixOriginals , setNetflixOriginals] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const topRatedRequest = await tvApi.topRated();
            const topPopularRequest = await tvApi.popular();
            const airingTodayRequest = await tvApi.airingToday();
            const netflixOriginalsRequest = await tvApi.netflixOriginals();

            setTopRated( topRatedRequest.data.results );
            setPopular( topPopularRequest.data.results );
            setAiringToday( airingTodayRequest.data.results );
            setNetflixOriginals( netflixOriginalsRequest.data.results );
        }


        fetchData();

    },[]);


    return(
        <>
        <TvPresenter
            topRated = {topRated}
            popular = {popular}
            netflixOriginals = {netflixOriginals}
        
        />
        </>
    )

}

export default TvContainer;