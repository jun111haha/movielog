import React, { Fragment } from "react";
import styled from "styled-components";
import Loading from "../../component/Loading";
import YouTube from "react-youtube";
import Nav from "../../component/Nav";
import Slick from "../../component/Slick";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh);
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const ContainerInner = styled.div`
  padding: 100px 100px;
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  color: #ffff;
  font-weight: bold;
  margin-left: 10px;
  z-index: 21;
`;

const ImgContent = styled.div`
  margin-top: -30px;
  margin-left: -70px;
  width: 40%;
  border-radius: 5px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 20;
`;

const Title = styled.h1`
  padding: 0px 5px;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
`;

const Year = styled.span`
  padding: 0px 5px;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
`;

const Genres = styled.div`
  padding: 0px 10px;
  color: white;
  margin-bottom: 10px;
  display: flex;
`;

const OverView = styled.h1`
  padding: 0px 10px;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1rem;
  max-width: 600px;
  height: 80px;
  margin-bottom: 10px;
`;

const Divider = styled.span`
  margin: 0px 5px;
  font-size: 40px;
`;

const VideoContent = styled.div`
  position: absolute;
  left: 55%;
  top: 66%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    width: 700px;
  }
`;

const opts = {
  width: "660",
  height: "400",
  playerVars: {
    autoplay: 0, // 자동재생 1
    modestbranding: 1,
  },
};

const DetailPresenter = (props) => {
  const { movieDetail, tvDetail, video, tvCredits } = props;

  return (
    <Container>
      <Nav />
      {props.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <BackgroundImage
            bgImage={`https://image.tmdb.org/t/p/original/${
              props.movieDetail.backdrop_path ||
              (props.tvDetail.backdrop_path &&
                props.movieDetail.backdrop_path) ||
              props.tvDetail.backdrop_path
            }`}
          />
          <ContainerInner>
            <ImgContent
              bgImage={`https://image.tmdb.org/t/p/original/${
                movieDetail.poster_path ||
                (tvDetail.poster_path && movieDetail.poster_path) ||
                tvDetail.poster_path
              }`}
            />
            <Content>
              <Title>
                {movieDetail?.title || tvDetail.name}(
                {movieDetail?.release_date
                  ? movieDetail?.release_date.split("-")[0]
                  : ""}
                {tvDetail?.first_air_date
                  ? tvDetail.first_air_date.split("-")[0]
                  : ""}
                )
              </Title>

              <Genres>
                {movieDetail?.genres &&
                  movieDetail?.genres.map((genre, index) =>
                    index === movieDetail?.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}

                {tvDetail?.genres &&
                  tvDetail?.genres.map((genre, index) =>
                    index === tvDetail?.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Genres>
              <OverView>{tvDetail?.overview || movieDetail?.overview}</OverView>
              {video?.length > 0 && (
                <YouTube
                  videoId={video[0].key}
                  opts={opts}
                  //이벤트 리스너
                  onEnd={(e) => {
                    e.target.stopVideo(0);
                  }}
                />
              )}
            </Content>
          </ContainerInner>
        </Fragment>
      )}
    </Container>
  );
};

export default DetailPresenter;
