import React, { useState, useEffect, useRef, useCallback } from "react";
import { moviesApi } from "../../Api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  const target = useRef();
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieUpcoming, setMovieUpComing] = useState([]);
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      if (pathname === "/movie") {
        const {
          data: { results: moviePopularRequest },
          data: { total_page: totalElements },
        } = await moviesApi.popular(page);
        setMoviePopular([...moviePopular, ...moviePopularRequest]);
        if (page + 1 > totalElements || page === 5) setDatatFinish(true);
      } else if (pathname === "/movie/movie-upcoming") {
        const {
          data: { results: movieUpcomingRequest },
          data: { total_page: totalElements },
        } = await moviesApi.upcoming(page);
        setMovieUpComing([...movieUpcoming, ...movieUpcomingRequest]);
        if (page + 1 > totalElements || page === 5) setDatatFinish(true);
      } else if (pathname === "/movie/movie-nowplaying") {
        const {
          data: { results: movieNowPlayingRequest },
          data: { total_page: totalElements },
        } = await moviesApi.nowPlaying(page);
        setMovieNowPlaying([...movieNowPlaying, ...movieNowPlayingRequest]);
        if (page + 1 > totalElements || page === 5) setDatatFinish(true);
      }

      setLoading(false);
      setIsLoader(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setPage(1);
    setDatatFinish(false);
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const IncreasePage = useCallback(() => {
    if (datatFinish === false) {
      setPage((prev) => prev + 1);
    }
  });

  const handleScrolling = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      IncreasePage();
    }
  });

  useEffect(() => {
    let observer;
    const { current } = target;
    if (current) {
      setIsLoader(true);

      // 관찰요소와 40%만큼 겹쳤을 때 onIntersect을 수행
      observer = new IntersectionObserver(handleScrolling, { threshold: 0.5 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScrolling, target]);

  return (
    <>
      <MoviePresenter
        moviePopular={moviePopular}
        movieUpcoming={movieUpcoming}
        movieNowPlaying={movieNowPlaying}
        loading={loading}
        location={pathname}
        target={target}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
};

export default MovieContainer;
