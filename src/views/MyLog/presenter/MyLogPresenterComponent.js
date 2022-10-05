import React from "react";
import styled from "styled-components";
import Nav from "../../../component/Nav";
import { Section } from "../../../component/Section";
import { HelmetProvider, Helmet } from "react-helmet-async";

const MyLogPresenterComponent = (props) => {
  const { poster } = props;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>내 로그</title>
        </Helmet>
      </HelmetProvider>
      <Nav />
      <Section margin={"50px"} padding={"80px"}>
        {poster}
      </Section>
    </>
  );
};

export default MyLogPresenterComponent;
