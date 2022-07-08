import ReactLoading from "react-loading";
import styled from "styled-components";
import React from "react";

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 34px;
  color: white;
`;

export const Loader = () => {
  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0"></ReactLoading>
    </LoaderWrap>
  );
};

export const NotFindData = () => {
  return (
    <LoaderWrap>
      <Title>더이상 표시할 컨텐츠가 없습니다.</Title>
    </LoaderWrap>
  );
};
