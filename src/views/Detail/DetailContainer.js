import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetaiPresenter";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import useStores from "../../store/useStores";
import { observer } from "mobx-react";

const DetailCantainer = observer(() => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const pathname = useLocation().pathname.split("/")[1];
  const { movieListStore, tvListStore } = useStores();

  const getDetail = () => {
    if (pathname === "movie") {
      movieListStore.getMovieDetailList(id);
      tvListStore.tvDetailReset();
    } else {
      tvListStore.getTvDetailList(id);
      movieListStore.movieDetailReset();
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    <DetailPresenter
      movieDetail={movieListStore.movieDetailList}
      // movieCredits={movieCredits}
      tvDetail={tvListStore.tvDetailList}
      // tvCredits={tvCredits}
      loading={loading}
      pathName={pathname}
      video={
        movieListStore.movieDetailList.videos
          ? movieListStore.movieDetailList.videos
          : tvListStore.tvDetailList.videos
      }
    />
  );
});

export default DetailCantainer;
