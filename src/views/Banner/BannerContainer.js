import React, { useState, useEffect } from "react";
import { moviesApi } from '../../Api';
import BannerPresenter from "./BannerPresenter";

const BannerContainer = () => {

  const [movie, setMovie] = useState([]);

  useEffect(()=>{
      async function fetchData(){
          const request = await moviesApi.upcoming();
          
          setMovie(
              request.data.results[
                Math.floor(Math.random() * request.data.results.length)       
              ]
          );
      }

      fetchData();
  }, []);
  
    return(
        <>
          <BannerPresenter movie={movie}/>
        </>
    )
}

export default BannerContainer;