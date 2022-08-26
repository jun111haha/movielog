import React from "react";
import styled from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import BannerContainer from "../../Banner/BannerContainer";
import Nav from "../../../component/Nav";
import Loading from "../../../component/Loading";
import { Section } from "../../../component/Section";
import PageHeader from "../../../component/PageHeader";
import { Loader } from "../../../component/Loader";
import { NotFindData } from "../../../component/Loader";

// const Container = styled.div`
//   padding: 50px;
//   :not(:last-child) {
//     margin-bottom: 50px;
//   }
// `;

const Container = styled.div`
  padding: 0 20px;
`;

// const Title = styled.h1`
//   align-items: center;
//   padding: 0px 20px;
//   color: white;
//   font-size: 2rem;
//   font-weight: 600;
//   margin-top: 10px;
//   display: flex;
//   justify-content: center;
// `;
const Div = styled.div``;

const TvPresenterComponent = (props) => {
  const { tv } = props;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>티비 프로그램 둘러보기</title>
        </Helmet>
      </HelmetProvider>
      <Div>
        <Nav />
        <BannerContainer />
        <Container>
          <PageHeader />
          {props.loading ? (
            <Loading />
          ) : (
            <Section center={"center"}>{tv}</Section>
          )}
        </Container>
        {props.datatFinish ? (
          <NotFindData />
        ) : (
          <div ref={props.intersectRef}>{props.isLoader && <Loader />}</div>
        )}
      </Div>
    </>
  );
};

export default TvPresenterComponent;
