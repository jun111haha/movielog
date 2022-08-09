import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetaiPresenter";
import { tvApi, moviesApi } from "../../Api";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailCantainer = (props) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [tvDetail, setTvDetail] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState();

  const { id } = useParams();
  const pathname = useLocation().pathname.split("/")[1];

  const getDetail = async () => {
    try {
      if (pathname === "movie") {
        const {
          data: movieDetail,
          data: {
            videos: { results: videos },
          },
        } = await moviesApi.movieDetail(id);
        setMovieDetail(movieDetail);
        setVideo(videos);

        const {
          data: { cast: movieCredits },
        } = await moviesApi.credits(id);
        setMovieCredits(movieCredits);
      } else {
        const {
          data: tvDetail,
          data: {
            videos: { results: videos },
          },
        } = await tvApi.tvDetail(id);
        setTvDetail(tvDetail);
        setVideo(videos);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailPresenter
      movieDetail={movieDetail}
      movieCredits={movieCredits}
      tvDetail={tvDetail}
      tvCredits={tvCredits}
      loading={loading}
      pathName={pathname}
      video={video}
    />
  );
};

export default DetailCantainer;
