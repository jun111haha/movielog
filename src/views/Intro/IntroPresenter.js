import styled from "styled-components";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  main {
    padding-top: 7;
    flex: 1;
  }
`;

const HomeIntro = styled.div`
  position: relative;
  z-index: 7;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 4.0em;
  margin : 100px;
`;

const Name = styled.p`
  font-size: 2.0em;
  margin-bottom: 10px
`;

const MoreButton = styled.button`
  width: 230px;
  padding: 0.8rem 0;
  border: 3px solid white;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Background = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
background: ${(props) => `url("https://image.tmdb.org/t/p/original/${props.backdropPath}") center no-repeat`};
background-size: cover;
height: 100vh;
&:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.3;
}
`;


const IntroPresenter = (props) =>{

  let history = useHistory();

  return (
  <>
  {props.loading ? (
      <div className={"iconArea"}>
        <CircularProgress />
      </div>
    ) : (
      <Layout>
          <Main>
              <HomeIntro>
                      <Container>
                          <Title>오늘의 추천 영화</Title>
                          <Name>{props.movie.original_title}</Name>
                          <Name>{props.movie.title}</Name>
                           <MoreButton onClick={() =>{history.push("/home")}}>더 보기</MoreButton>
                      </Container>
              </HomeIntro>
          </Main>
        <Background backdropPath={props.movie.backdrop_path}/>
      </Layout>
    )
  }
  </>
  );
}

export default IntroPresenter;