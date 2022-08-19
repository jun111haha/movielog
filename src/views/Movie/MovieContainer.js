import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react";
import useIntersect from "../../utils/userIntersect";
import MoviePresenter from "./MoviePresenter";
import useStores from "../../store/useStores";

const MovieContainer = observer((props) => {
  const {
    location: { pathname },
  } = props;

  const intersectRef = useRef(null);
  const { movieListStore } = useStores();
  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);

  const [popularPage, setPopularPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [nowPlayingPage, setNowPlayingPage] = useState(1);

  const { isIntersect } = useIntersect(intersectRef, {
    rootMargin: "200px",
    threshold: 1,
  });

  const loadData = () => {
    if (pathname === "/movie" && (isIntersect || datatFinish === false)) {
      popularPage >= 6 ? setDatatFinish(true) : setDatatFinish(false);
      movieListStore.getMoviePopularList(popularPage);
      setPopularPage((prev) => prev + 1);
    } else if (
      pathname === "/movie/movie-upcoming" &&
      (isIntersect || datatFinish === false)
    ) {
      upcomingPage >= 6 ? setDatatFinish(true) : setDatatFinish(false);
      movieListStore.getMovieUpcomingList(upcomingPage);
      setUpcomingPage((prev) => prev + 1);
    } else if (
      pathname === "/movie/movie-nowplaying" &&
      (isIntersect || datatFinish === false)
    ) {
      nowPlayingPage >= 6 ? setDatatFinish(true) : setDatatFinish(false);
      movieListStore.getMovieNowPlayingList(nowPlayingPage);
      setNowPlayingPage((prev) => prev + 1);
    }

    setLoading(false);
    setIsLoader(false);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      loadData();
    }, 600);
    setIsLoader(true);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersect, datatFinish]);

  useEffect(() => {
    setIsLoader(false);
    setDatatFinish(false);
  }, [pathname]);

  return (
    <>
      <MoviePresenter
        moviePopular={movieListStore.moviePopularList}
        movieUpcoming={movieListStore.movieUpcomingList}
        movieNowPlaying={movieListStore.movieNowPlayingList}
        loading={loading}
        location={pathname}
        intersectRef={intersectRef}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
});

export default MovieContainer;
