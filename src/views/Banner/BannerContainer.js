import React, { useState, useEffect } from "react";
import { tvApi } from '../../Api';
import BannerPresenter from "./BannerPresenter";

const BannerContainer = () => {

  const [movie, setMovie] = useState([]);

  useEffect(()=>{
      async function fetchData(){
          const request = await tvApi.netflixOriginals();

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