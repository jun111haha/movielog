import React, { useState, useEffect } from "react";
import { moviesApi } from "../../Api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = () => {
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieUpcoming, setMovieUpComing] = useState([]);
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const movieNowPlayingRequest = await moviesApi.nowPlaying();
      const movieUpcomingRequest = await moviesApi.upcoming();
      const moviePopularRequest = await moviesApi.popular();

      setMoviePopular(moviePopularRequest.data.results);
      setMovieUpComing(movieUpcomingRequest.data.results);
      setMovieNowPlaying(movieNowPlayingRequest.data.results);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MoviePresenter
        moviePopular={moviePopular}
        movieUpcoming={movieUpcoming}
        movieNowPlaying={movieNowPlaying}
        loading={loading}
      />
    </>
  );
};

export default MovieContainer;
