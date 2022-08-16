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
import { Fragment } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Container = styled.div`
  padding: 0 20px;
`;

const Div = styled.div``;

const MoviePresenter = (props) => {
  const { moviePopular, movieUpcoming } = props;
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
            <Div>
              {props.location === "/movie" && moviePopular?.length > 0 && (
                <Div>
                  <Section center={"center"}>
                    {moviePopular.map((data, index) => {
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
                movieUpcoming?.length > 0 && (
                  <Div>
                    <Section center={"center"}>
                      {movieUpcoming.map((data, index) => {
                        return (
                          <Poster
                            id={data.id}
                            key={index}
                            imgUrl={data.poster_path}
                            title={
                              data.title ? data.title : data.original_title
                            }
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
                    <Section center={"center"}>
                      {props.movieNowPlaying.map((data, index) => {
                        return (
                          <Poster
                            id={data.id}
                            key={index}
                            imgUrl={data.poster_path}
                            title={
                              data.title ? data.title : data.original_title
                            }
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
          <div ref={props.intersectRef}>{props.isLoader && <Loader />}</div>
        )}
      </Fragment>
    </>
  );
};

export default MoviePresenter;
