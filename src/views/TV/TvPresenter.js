import React from "react";
import styled from 'styled-components';
import BannerContainer from "../Banner/BannerContainer";
import Poster from "../../component/Poster";
import Nav from "../../component/Nav";
import CircularProgress from "@material-ui/core/CircularProgress";

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

const TvPresenter = (props) => {
    return(
        <>
        <Nav></Nav>
        <BannerContainer/>
            <Container>
                <Title>넷플릭스 오리지날</Title>
                {
                    props.loading ? 
                    <div className={"iconArea"}>
                        <CircularProgress />
                    </div>
                    :
                    <>
                    <Grid>
                        {
                            props.netflixOriginals.map((data, index)=>{
                                return(
                                    <Poster key ={index}
                                            imgUrl={data.backdrop_path || data.poster_path}
                                            title ={data.name}
                                            rating={data.vote_average}>
                                    </Poster>
                                    )
                            })
                        }
                    </Grid>
                <Title>인기방영 프로그램</Title>
                    <Grid>
                        {
                            props.popular.map((data, index)=>{
                                return(
                                    <Poster key ={index}
                                            imgUrl={data.backdrop_path || data.poster_path}
                                            title ={data.name}
                                            rating={data.vote_average}>
                                    </Poster>
                                    )
                            })
                        }
                    </Grid>
                <Title>평점 순위 프로그램</Title>
                    <Grid>
                        {
                            props.topRated.map((data, index)=>{
                                return(
                                    <Poster key ={index}
                                            imgUrl={data.backdrop_path || data.poster_path}
                                            title ={data.name}
                                            rating={data.vote_average}>
                                    </Poster>
                                    )
                            })
                        }
                    </Grid>
                    </>
                }
            </Container>  
        </>
    )
}

export default TvPresenter;