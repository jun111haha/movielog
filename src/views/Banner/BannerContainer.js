import React, { useState, useEffect } from "react";
import { moviesApi } from '../../Api';
import BannerPresenter from "./BannerPresenter";

const BannerContainer = () => {

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
      const request = await moviesApi.upcoming();
      
      setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)       
          ]
      );

      setLoading(false);
  }

  useEffect(()=>{

      fetchData();
  }, []);
  
    return(
        <>
          <BannerPresenter movie={movie}
                           loading ={loading}/>
        </>
    )
}

export default BannerContainer;