import React from "react";
import styled from "styled-components";
import Loading from "../../component/Loading";

const Container = styled.div`
  background-image: ${(props) =>
    `url("https://image.tmdb.org/t/p/original/${props.backdropPath}")`};
  color: #e6e6e6;
  object-fit: contain;
  height: 700px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const BannerTitle = styled.h1`
  margin: 10px;
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem; ;
`;

const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1rem;
  max-width: 360px;
  height: 80px;
  margin: 20px;
`;

const BannerFadeBottom = styled.div`
  height: 23.2rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

const truncate = (str, n) => {
  if (str) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  } else {
    return "설명이 없습니다.";
  }
};

const BannerPresenter = (props) => {
  return (
    <>
      {props.loading ? (
        <Loading />
      ) : (
        <Container backdropPath={props.movie.backdrop_path}>
          <BannerContents>
            <BannerTitle>
              {props.movie.title ||
                props.movie.name ||
                props.movie.original_name}
            </BannerTitle>
            <BannerDescription>
              {truncate(props.movie.overview, 300)}
            </BannerDescription>
          </BannerContents>
          <BannerFadeBottom />
        </Container>
      )}
    </>
  );
};

export default BannerPresenter;
