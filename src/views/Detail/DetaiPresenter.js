import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../component/Loading";
import YouTube from "react-youtube";
import Nav from "../../component/Nav";

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const Divider = styled.span`
  margin: 0px 5px;
  font-size: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: flex;
`;

const VideoContent = styled.div`
  position: absolute;
  left: 68%;
  top: 45%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    width: 700px;
  }
`;

const DetailPresenter = (props) => {
  const { movieDetail, tvDetail, video } = props;
  console.log(movieDetail);
  console.log(tvDetail);
  console.log(video);
  return (
    <Container>
      <Nav />
      {props.loading ? (
        <Loading />
      ) : (
        <BackgroundImage
          bgImage={`https://image.tmdb.org/t/p/original/${
            props.movieDetail.backdrop_path ||
            (props.tvDetail.backdrop_path && props.movieDetail.backdrop_path) ||
            props.tvDetail.backdrop_path
          }`}
        />
      )}
      <VideoContent>
        {video?.length > 0 ? (
          <YouTube
            videoId={video[0].key}
            opts={{
              width: "1000",
              height: "600",
              playerVars: {
                autoplay: 1, //자동재생 O
                rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
              },
            }}
            //이벤트 리스너
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        ) : null}
      </VideoContent>
    </Container>
  );
};

export default DetailPresenter;
