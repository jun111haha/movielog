import React from "react";
import styled from "styled-components";
import BannerContainer from "../Banner/BannerContainer";
import Poster from "../../component/Poster";
import Nav from "../../component/Nav";
import Loading from "../../component/Loading";
import { Section } from "../../component/Section";

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

const MoviePresenter = (props) => {
  return (
    <>
      <Nav></Nav>
      <BannerContainer />
      <Container>
        <Title>인기영화</Title>
        {props.loading ? (
          <Loading />
        ) : (
          <>
            <Section>
              {props.moviePopular.map((data, index) => {
                return (
                  <Poster
                    id={data.id}
                    key={index}
                    imgUrl={data.poster_path}
                    title={data.title ? data.title : data.original_title}
                    rating={data.vote_average}
                    isMove={true}
                  ></Poster>
                );
              })}
            </Section>
            <Title>개봉예정 영화</Title>
            <Section>
              {props.movieUpcoming.map((data, index) => {
                return (
                  <Poster
                    id={data.id}
                    key={index}
                    imgUrl={data.poster_path}
                    title={data.title ? data.title : data.original_title}
                    rating={data.vote_average}
                    isMove={true}
                  ></Poster>
                );
              })}
            </Section>
            <Title>상영중인 영화</Title>
            <Section>
              {props.movieNowPlaying.map((data, index) => {
                return (
                  <Poster
                    id={data.id}
                    key={index}
                    imgUrl={data.poster_path}
                    title={data.title ? data.title : data.original_title}
                    rating={data.vote_average}
                    isMove={true}
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

export default MoviePresenter;
