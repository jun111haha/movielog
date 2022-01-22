import React, { useState, useEffect } from "react";
import { moviesApi } from "../../Api";
import IntroPresenter from "./IntroPresenter";

const IntroContainer = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function fetchData(){

            setLoading(true);

            const request = await moviesApi.popular();

            setMovie(
                request.data.results[
                  Math.floor(Math.random() * request.data.results.length)       
                ]
            );
            setLoading(false);
        }

        fetchData();
    }, []);
    
    return (
        <IntroPresenter movie = {movie}
                        loading ={loading}/>
    );
}

export default IntroContainer;