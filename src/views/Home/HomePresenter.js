import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Banner from '../../component/Banner'

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
    margin-top :30px;
`;


const Grid = styled.div`
    margin-top: 30px;
    padding: 0px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 20px;
`;

const ImgBox = styled.div`
  width: 200px;
  height: 280px;
  margin-bottom: 50px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.35s;
  }
`;

const Img = styled.img`
    background:url(${props => `https://image.tmdb.org/t/p/w500${props.bgUrl}`});
    width:100%;
    height:100%;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    backgorund-size: 100% 100%;

`;

const Rating = styled.p`
  color: #dcdcdc;
`

const Name = styled.p`
   color: #dcdcdc;
`


const HomePresenter = (props) =>{
    return(
        <>
        <Banner></Banner>
            <Container>
                <Title>인기영화</Title>
                <Grid>
                        {
                            props.moviePopular.map((data, i)=>{
                                console.log(data);
                                return(
                                    <ImgBox key={i}>
                                        <Img bgUrl={data.backdrop_path}/>
                                        <Name>{data.title}</Name>
                                        <Rating>⭐ : {data.vote_average}</Rating>
                                    </ImgBox>
                                )
                                
                            })
                        }
                </Grid>
            </Container>  
        </>
    )
}

export default HomePresenter;