import React from "react";
import styled from "styled-components";
import BannerContainer from "../Banner/BannerContainer";
import Poster from "../../component/Poster";
import Nav from "../../component/Nav";
import Loading from "../../component/Loading";
import { Section } from "../../component/Section";
import { Loader } from "../../component/Loader";
import { NotFindData } from "../../component/Loader";
import PageHeader from "../../component/PageHeader";

const Container = styled.div`
  padding: 0 20px;
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

const Div = styled.div``;

const MoviePresenter = (props) => {
  return (
    <Div>
      <Nav />
      <BannerContainer />
      <Container>
        <PageHeader />
        {props.loading ? (
          <Loading />
        ) : (
          <Div>
            {props.location === "/movie" && props.moviePopular.length > 0 && (
              <Div>
                <Section>
                  {props.moviePopular.map((data, index) => {
                    return (
                      <Poster
                        id={data.id}
                        key={index}
                        imgUrl={data.poster_path}
                        title={data.title ? data.title : data.original_title}
                        rating={data.vote_average}
                        isMovie={true}
                      ></Poster>
                    );
                  })}
                </Section>
              </Div>
            )}
            {props.location === "/movie/movie-upcoming" &&
              props.movieUpcoming.length > 0 && (
                <Div>
                  <Section>
                    {props.movieUpcoming.map((data, index) => {
                      return (
                        <Poster
                          id={data.id}
                          key={index}
                          imgUrl={data.poster_path}
                          title={data.title ? data.title : data.original_title}
                          rating={data.vote_average}
                          isMovie={true}
                        ></Poster>
                      );
                    })}
                  </Section>
                </Div>
              )}
            {props.location === "/movie/movie-nowplaying" &&
              props.movieNowPlaying.length > 0 && (
                <Div>
                  <Section>
                    {props.movieNowPlaying.map((data, index) => {
                      return (
                        <Poster
                          id={data.id}
                          key={index}
                          imgUrl={data.poster_path}
                          title={data.title ? data.title : data.original_title}
                          rating={data.vote_average}
                          isMovie={true}
                        ></Poster>
                      );
                    })}
                  </Section>
                </Div>
              )}
          </Div>
        )}
      </Container>
      {props.datatFinish ? (
        <NotFindData />
      ) : (
        <div ref={props.target}>{props.isLoader && <Loader />}</div>
      )}
    </Div>
  );
};

export default MoviePresenter;
