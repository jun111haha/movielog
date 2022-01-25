import React from "react";
import styled from 'styled-components';
import BannerContainer from "../Banner/BannerContainer";
import Poster from "../../component/Poster";
import Nav from "../../component/Nav";

const Container = styled.div`
    padding: 50px;
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.h2`
    padding: 0px 20px;
    color : white;
    font-size: 1.3rem;
    font-weight: 600;
    margin-top :10px;
`;


const Grid = styled.div`
    margin-top: 30px;
    margin-bottom : 50px;
    padding: 0px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
    grid-gap: 20px;
`;

const StyledAlwaysScrollSection = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const MoviePresenter = (props) =>{
    return(
        <>
        <Nav></Nav>
        <BannerContainer/>
            <Container>
                <Title>인기영화</Title>
                    <Grid>
                        {
                            props.moviePopular.map((data, index)=>{
                                return(
                                    <Poster key ={index}
                                            imgUrl={data.backdrop_path}
                                            title ={data.title}
                                            rating={data.vote_average}>
                                    </Poster>
                                    )
                            })
                        }
                    </Grid>
                <Title>개봉예정 영화</Title>
                    <Grid>
                        {
                            props.movieUpcoming.map((data, index)=>{
                                return(
                                    <Poster key ={index}
                                            imgUrl={data.backdrop_path}
                                            title ={data.title}
                                            rating={data.vote_average}>
                                    </Poster>
                                    )
                            })
                        }
                    </Grid>
                <Title>상영중인 영화</Title>
                    <Grid>
                        {
                            props.movieNowPlaying.map((data, index)=>{
                                return(
                                    <Poster key ={index}
                                            imgUrl={data.backdrop_path}
                                            title ={data.title}
                                            rating={data.vote_average}>
                                    </Poster>
                                    )
                            })
                        }
                    </Grid>
            </Container>  
        </>
    )
}

export default MoviePresenter;