import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Title = styled.div`
  position: fixed;
  color: black;
  font-size: 50px;
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404 NotFound</Title>
    </Container>
  );
};

export default NotFound;
