import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../../component/Loading";

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
          bgImage={`https://image.tmdb.org/t/p/original/${props.movieDetail.backdrop_path}`}
        />
      )}
    </Container>
  );
};

export default DetailPresenter;
