import React, { useState, useEffect } from "react";
import { moviesApi } from "../../Api";
import IntroPresenter from "./IntroPresenter";

const IntroContainer = () => {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const fetchData = async () => {
        try {
            const { data : { results : popular }} = await moviesApi.popular()
            
            setMovie(
                popular [
                    Math.floor(Math.random() * popular.length)       
                ]
            );

            setLoading(false);

        } catch (error) {
            console.log(error);
        }    
      };

    useEffect(()=>{

        fetchData();
    }, []);
    
    return (

        <IntroPresenter movie = {!loading && movie}
                        loading ={loading}/>
    );
}

export default IntroContainer;