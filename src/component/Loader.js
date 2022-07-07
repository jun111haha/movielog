import ReactLoading from "react-loading";
import styled from "styled-components";
import React, { memo } from "react";

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0"></ReactLoading>
    </LoaderWrap>
  );
};

export default Loader;
