import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 25px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: -40px;
    opacity: 0.85;
    font-weight: 500;
  }
`;

const Content = styled.div`
  margin-top: 25px;
`;

export const SliderSection = ({ title, childern }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{childern}</Content>
    </Container>
  );
};
