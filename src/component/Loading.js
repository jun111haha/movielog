import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Loading = () => {
  return (
    <Outter>
      <CircularProgress style={{ color: "white", fontSize: "150px" }} />
    </Outter>
  );
};

export default Loading;
