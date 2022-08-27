import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react";
import Poster from "../../../component/Poster";
import useIntersect from "../../../utils/userIntersect";
import useStores from "../../../store/useStores";
import MoviePresenterComponent from "../presenter/MoviePresenterComponent";
import { debounce } from "lodash";

const MoviePopularContainer = observer(() => {
  const intersectRef = useRef(null);
  const { movieListStore } = useStores();
  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);

  const { isIntersect } = useIntersect(intersectRef, {
    rootMargin: "200px",
    threshold: 1,
  });

  const getLoadData = debounce(() => {
    if (isIntersect && datatFinish === false) {
      movieListStore.moviePopularPage > 6
        ? setDatatFinish(true)
        : movieListStore.getMoviePopularList(movieListStore.moviePopularPage++);
    }

    setLoading(false);
    setIsLoader(false);
  }, 500);

  useEffect(() => {
    getLoadData();
    setIsLoader(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersect, datatFinish]);

  return (
    <>
      <MoviePresenterComponent
        movie={
          <>
            {movieListStore.moviePopularList.map((data, index) => {
              return (
                <Poster
                  id={data.id}
                  key={index}
                  imgUrl={data.poster_path}
                  title={data.title ? data.title : data.original_title}
                  rating={data.vote_average}
                  isMovie={true}
                />
              );
            })}
          </>
        }
        loading={loading}
        intersectRef={intersectRef}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
});

export default MoviePopularContainer;
