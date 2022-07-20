import React, { useState, useEffect, useRef } from "react";
import useIntersect from "../../utils/userIntersect";
import { moviesApi } from "../../Api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  const intersectRef = useRef(null);
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieUpcoming, setMovieUpComing] = useState([]);
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);
  const [page, setPage] = useState(1);
  const { isIntersect } = useIntersect(intersectRef, {
    rootMargin: "200px",
    threshold: 1,
  });

  // async function fetchData() {
  //   try {
  //     if (pathname === "/movie") {
  //       const {
  //         data: { results: moviePopularRequest },
  //         data: { total_page: totalElements },
  //       } = await moviesApi.popular(page);
  //       setMoviePopular([...moviePopular, ...moviePopularRequest]);
  //       if (page + 1 > totalElements || page === 5) setDatatFinish(true);
  //     } else if (pathname === "/movie/movie-upcoming") {
  //       const {
  //         data: { results: movieUpcomingRequest },
  //         data: { total_page: totalElements },
  //       } = await moviesApi.upcoming(page);
  //       setMovieUpComing([...movieUpcoming, ...movieUpcomingRequest]);
  //       if (page + 1 > totalElements || page === 5) setDatatFinish(true);
  //     } else if (pathname === "/movie/movie-nowplaying") {
  //       const {
  //         data: { results: movieNowPlayingRequest },
  //         data: { total_page: totalElements },
  //       } = await moviesApi.nowPlaying(page);
  //       setMovieNowPlaying([...movieNowPlaying, ...movieNowPlayingRequest]);
  //       if (page + 1 > totalElements || page === 5) setDatatFinish(true);
  //     }

  //     setLoading(false);
  //     setIsLoader(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const loadData = async () => {
    try {
      if (pathname === "/movie" && (isIntersect || datatFinish == false)) {
        const {
          data: { results: moviePopularRequest },
          data: { total_page: totalElements },
        } = await moviesApi.popular(page);
        setMoviePopular([...moviePopular, ...moviePopularRequest]);
        setPage((prev) => prev + 1);
      } else if (
        pathname === "/movie/movie-upcoming" &&
        (isIntersect || datatFinish == false)
      ) {
        const {
          data: { results: movieUpcomingRequest },
          data: { total_page: totalElements },
        } = await moviesApi.upcoming(page);
        setMovieUpComing([...movieUpcoming, ...movieUpcomingRequest]);
        setPage((prev) => prev + 1);
      } else if (
        pathname === "/movie/movie-nowplaying" &&
        (isIntersect || datatFinish == false)
      ) {
        const {
          data: { results: movieNowPlayingRequest },
          data: { total_page: totalElements },
        } = await moviesApi.nowPlaying(page);
        setMovieNowPlaying([...movieNowPlaying, ...movieNowPlayingRequest]);
        setPage((prev) => prev + 1);
      }
      setLoading(false);
      setIsLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    setIsLoader(true);
  }, [isIntersect, datatFinish]);

  useEffect(() => {
    setPage(1);
    setDatatFinish(false);
  }, [pathname]);

  return (
    <>
      <MoviePresenter
        moviePopular={moviePopular}
        movieUpcoming={movieUpcoming}
        movieNowPlaying={movieNowPlaying}
        loading={loading}
        location={pathname}
        intersectRef={intersectRef}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
};

export default MovieContainer;
