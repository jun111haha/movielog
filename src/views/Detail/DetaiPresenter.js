import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const DetailPresenter = (props) => {
  return (
    <BackgroundImage>
      bgImage=
      {`https://image.tmdb.org/t/p/original/${props.movieDetail.backgroundImage}`}
    </BackgroundImage>
  );
};

export default DetailPresenter;
