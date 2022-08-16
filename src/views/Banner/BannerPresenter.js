import React from "react";
import styled from "styled-components";
import Loading from "../../component/Loading";
import { Fragment } from "react";

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

// const BannerButton = styled.div`
//   width: 100px;
//   color: #fff;
//   font-weight: 700;
//   border-radius: 0.2vw;
//   padding-left: 2rem;
//   padding-right: 2rem;
//   margin-left: 1rem;
//   margin-right: 1rem;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
//   background-color: rgba(51, 51, 51, 0.5);
//   &:hover {
//     transform: scale(1.1);
//     transition: transform 0.35s;
//     cursor: pointer;
//   }
// `;

const BannerPresenter = (props) => {
  const truncate = (str, n) => {
    if (str) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    } else {
      return "설명이 없습니다.";
    }
  };

  return (
    <Fragment>
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
            {/* <BannerButton>예고편 PLAY</BannerButton> */}
            <BannerDescription>
              {truncate(props.movie.overview, 300)}
            </BannerDescription>
          </BannerContents>
          <BannerFadeBottom />
        </Container>
      )}
    </Fragment>
  );
};

export default BannerPresenter;
