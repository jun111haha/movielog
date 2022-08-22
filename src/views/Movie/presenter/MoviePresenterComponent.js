import React from "react";
import styled from "styled-components";
import { Fragment } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import BannerContainer from "../../Banner/BannerContainer";
import Nav from "../../../component/Nav";
import Loading from "../../../component/Loading";
import { Section } from "../../../component/Section";
import { Loader } from "../../../component/Loader";
import { NotFindData } from "../../../component/Loader";
import PageHeader from "../../../component/PageHeader";

const Container = styled.div`
  padding: 0 20px;
`;
const MoviePresenterComponent = (props) => {
  const { movie } = props;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>영화 둘러보기</title>
        </Helmet>
      </HelmetProvider>
      <Fragment>
        <Nav />
        <BannerContainer />
        <Container>
          <PageHeader />
          {props.loading ? (
            <Loading />
          ) : (
            <Section center={"center"}>{movie}</Section>
          )}
        </Container>
        {props.datatFinish ? (
          <NotFindData />
        ) : (
          <div ref={props.intersectRef}>{props.isLoader && <Loader />}</div>
        )}
      </Fragment>
    </>
  );
};

export default MoviePresenterComponent;
