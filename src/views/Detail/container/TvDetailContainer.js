import React, { useEffect, useState } from "react";
import DetailPresenterComponent from "../presenter/DetailPresenterComponent";
import useStores from "../../../store/useStores";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import {
  ImgContent,
  BackgroundImage,
  Title,
  Genres,
  OverView,
} from "../styled/DetailPresenterStyled";

const TvDetailContainer = observer(() => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { tvListStore } = useStores();

  const getDetail = () => {
    tvListStore.getTvDetailList(id);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailPresenterComponent
      backgroundImage={
        <>
          {tvListStore.tvDetailList.backdrop_path && (
            <BackgroundImage
              bgImage={`https://image.tmdb.org/t/p/original/${tvListStore.tvDetailList.backdrop_path}`}
            />
          )}
        </>
      }
      imgContent={
        <>
          {tvListStore.tvDetailList.poster_path && (
            <ImgContent
              bgImage={`https://image.tmdb.org/t/p/original/${tvListStore.tvDetailList.poster_path}`}
            />
          )}
        </>
      }
      title={
        <>
          <Title>
            {tvListStore.tvDetailList.name} (
            {tvListStore.tvDetailList?.first_air_date
              ? tvListStore.tvDetailList?.first_air_date.split("-")[0]
              : ""}
            )
          </Title>
        </>
      }
      genres={
        <>
          <Genres>
            {tvListStore.tvDetailList?.genres &&
              tvListStore.tvDetailList?.genres.map((genre, index) =>
                index === tvListStore.tvDetailList?.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
          </Genres>
        </>
      }
      overView={<OverView>{tvListStore.tvDetailList.overview}</OverView>}
      loading={loading}
      video={tvListStore.tvDetailList.videos}
    />
  );
});

export default TvDetailContainer;
