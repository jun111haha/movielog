import React from "react";
import styled from "styled-components";
import BannerContainer from "../Banner/BannerContainer";
import Poster from "../../component/Poster";
import Nav from "../../component/Nav";
import Loading from "../../component/Loading";
import { Section } from "../../component/Section";
import PageHeader from "../../component/PageHeader";

const Container = styled.div`
  padding: 50px;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.h1`
  align-items: center;
  padding: 0px 20px;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  display: flex;
`;

const TvPresenter = (props) => {
  console.log(props.location);
  return (
    <>
      <Nav />
      <BannerContainer />
      <Container>
        <PageHeader />
        <Title>넷플릭스 오리지날</Title>
        {props.loading ? (
          <Loading />
        ) : (
          <>
            <Section>
              {props.netflixOriginals.map((data, index) => {
                return (
                  <Poster
                    key={index}
                    id={data.id}
                    imgUrl={data.poster_path}
                    title={data.name}
                    rating={data.vote_average}
                  ></Poster>
                );
              })}
            </Section>
            <Title>인기방영 프로그램</Title>
            <Section>
              {props.popular.map((data, index) => {
                return (
                  <Poster
                    key={index}
                    id={data.id}
                    imgUrl={data.poster_path}
                    title={data.name}
                    rating={data.vote_average}
                  ></Poster>
                );
              })}
            </Section>
            <Title>평점 순위 프로그램</Title>
            <Section>
              {props.topRated.map((data, index) => {
                return (
                  <Poster
                    key={index}
                    id={data.id}
                    imgUrl={data.poster_path}
                    title={data.name}
                    rating={data.vote_average}
                  ></Poster>
                );
              })}
            </Section>
          </>
        )}
      </Container>
    </>
  );
};

export default TvPresenter;
