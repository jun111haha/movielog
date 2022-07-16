import React, { Fragment } from "react";
import styled from "styled-components";
import Loading from "../../component/Loading";
import YouTube from "react-youtube";
import Nav from "../../component/Nav";

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
  z-index: 0;
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
  width: "640",
  height: "390",
  playerVars: {
    autoplay: 1, // 자동재생 1
    modestbranding: 1,
  },
};

const DetailPresenter = (props) => {
  const { movieDetail, tvDetail, video } = props;

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
