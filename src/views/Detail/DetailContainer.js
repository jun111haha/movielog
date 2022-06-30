import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetaiPresenter";
import { tvApi, moviesApi } from "../../Api";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailCantainer = () => {
  const [movieResult, setMovieResult] = useState([]);
  const [tvResult, setTvResult] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const pathname = useLocation().pathname.substring(0, 6);
  console.log(pathname);

  const getDetail = async () => {
    try {
      if (pathname === "/movie") {
        const { data: movieResult } = await moviesApi.movieDetail(id);
        setMovieResult(movieResult);

        const {
          data: { cast: movieCredits },
        } = await moviesApi.credits(id);
        setMovieCredits(movieCredits);
      } else {
        const { data: tvResult } = await tvApi.tvDetail(id);
        setTvResult(tvResult);

        const {
          data: { cast: tvCredits },
        } = await tvApi.credits(id);
        setTvCredits(tvCredits);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <DetailPresenter
      movieDetail={movieResult}
      movieCredits={movieCredits}
      tvResult={tvResult}
      tvCredits={tvCredits}
      loading={loading}
    />
  );
};

export default DetailCantainer;
