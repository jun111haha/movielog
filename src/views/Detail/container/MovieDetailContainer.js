import React, { useEffect, useState } from "react";
import DetailPresenterComponent from "../presenter/DetailPresenterComponent";
import useStores from "../../../store/useStores";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { BackgroundImage } from "../presenter/DetailPresenterStyled";
import { ImgContent } from "../presenter/DetailPresenterStyled";
import { Title } from "../presenter/DetailPresenterStyled";
import { Genres } from "../presenter/DetailPresenterStyled";
import { OverView } from "../presenter/DetailPresenterStyled";

const MovieDetailContainer = observer(() => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { movieListStore } = useStores();

  const getDetail = () => {
    movieListStore.getMovieDetailList(id);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailPresenterComponent
      backgroundImage={
        <BackgroundImage
          bgImage={`https://image.tmdb.org/t/p/original/${movieListStore.movieDetailList.backdrop_path}`}
        />
      }
      imgContent={
        <ImgContent
          bgImage={`https://image.tmdb.org/t/p/original/${movieListStore.movieDetailList.poster_path}`}
        />
      }
      title={
        <>
          <Title>
            {movieListStore.movieDetailList.title} (
            {movieListStore.movieDetailList?.release_date
              ? movieListStore.movieDetailList?.release_date.split("-")[0]
              : ""}
            )
          </Title>
        </>
      }
      genres={
        <>
          <Genres>
            {movieListStore.movieDetailList?.genres &&
              movieListStore.movieDetailList?.genres.map((genre, index) =>
                index === movieListStore.movieDetailList?.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
          </Genres>
        </>
      }
      overView={<OverView>{movieListStore.movieDetailList.overview}</OverView>}
      loading={loading}
      video={movieListStore.movieDetailList.videos}
    />
  );
});

export default MovieDetailContainer;
