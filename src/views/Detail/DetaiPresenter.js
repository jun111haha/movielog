import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../../component/Loading";
import YouTube from "react-youtube";

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

const Container = styled.div`
  height: 600px;
  width: 100%;
  padding: 0 8%;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const DetailPresenter = (props) => {
  return (
    <Container>
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
      <YouTube
        videoId={props.pathKey}
        opts={{
          width: "560",
          height: "315",
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
      ></YouTube>
    </Container>
  );
};

export default DetailPresenter;
